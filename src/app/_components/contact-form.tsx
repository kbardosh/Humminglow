"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { api } from "~/trpc/react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  description: z.string().min(1, {
    message: "Description must be at least 1 character.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const mutation = api.contact.submitContactForm.useMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      await mutation.mutateAsync(values);
      alert("Form submitted successfully!");
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        alert(`Failed to submit the form. Please try again. ${error.message}`);
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gold-400"
        >
          Name
        </label>
        <Input
          id="name"
          {...form.register("name")}
          aria-invalid={!!form.formState.errors.name}
        />
        {form.formState.errors.name && (
          <p className="text-sm text-red-500">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gold-400"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          aria-invalid={!!form.formState.errors.email}
        />
        {form.formState.errors.email && (
          <p className="text-sm text-red-500">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gold-400"
        >
          Description
        </label>
        <Input
          id="description"
          multiline
          {...form.register("description")}
          aria-invalid={!!form.formState.errors.description}
        />
        {form.formState.errors.description && (
          <p className="text-sm text-red-500">
            {form.formState.errors.description.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit" isLoading={mutation.isPending}>
          Submit
        </Button>
      </div>
    </form>
  );
}
