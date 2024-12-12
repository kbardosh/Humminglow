import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const faqRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.faq.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        question: z.string().min(1, "Question cannot be empty"),
        answer: z.string().min(1, "Answer cannot be empty"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { question, answer } = input;

      return ctx.db.faq.create({
        data: {
          question,
          answer,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1, "Invalid FAQ ID"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      const faq = await ctx.db.faq.findUnique({ where: { id } });
      if (!faq) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "FAQ not found",
        });
      }

      await ctx.db.faq.delete({ where: { id } });
    }),
});
