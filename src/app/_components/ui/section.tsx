import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "~/lib/utils";

const sectionVariants = cva("w-full p-8 sm:p-12 md:p-16 lg:p-20");

export type SectionProps = VariantProps<typeof sectionVariants> &
  ComponentPropsWithoutRef<"section">;

export const Section = ({ children, className, ...rest }: SectionProps) => {
  return (
    <section {...rest} className={sectionVariants({ className })}>
      {children}
    </section>
  );
};

const sectionHeadingVariants = cva(
  "text-3xl font-bold text-white-400 md:text-3xl xl:text-5xl text-center md:text-left",
);

export type SectionHeadingProps = VariantProps<typeof sectionHeadingVariants> &
  ComponentPropsWithoutRef<"h2">;

export const SectionHeading = ({
  className,
  children,
  ...rest
}: SectionHeadingProps) => {
  return (
    <h2 className={cn(sectionHeadingVariants({ className }))} {...rest}>
      {children}
    </h2>
  );
};
