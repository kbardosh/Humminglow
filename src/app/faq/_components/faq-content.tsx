"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../_components/ui/accordion";

import { api } from "../../../trpc/react";
import { Spinner } from "~/app/_components/ui/spinner";

export const FAQContent = () => {
  const query = api.faq.getAll.useQuery();

  if (query.isLoading || query.isPending)
    return (
      <div className="h-64">
        <Spinner size="lg" color="gold" />
      </div>
    );
  if (query.isError)
    return <p className="text-red-400">{query.error.message}</p>;

  return (
    <div className="mx-auto h-full max-w-3xl p-6">
      <Accordion type="single" collapsible className="w-full">
        {query.data.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="border-b border-gold-400/20"
          >
            <AccordionTrigger className="text-left text-lg font-medium text-gold-400 hover:text-gold-400/80">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-white-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
