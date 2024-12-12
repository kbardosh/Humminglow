import { cva, type VariantProps } from "class-variance-authority";
import BaseLink, { type LinkProps as BaseLinkProps } from "next/link";
import { type ComponentPropsWithoutRef } from "react";

const linkVariants = cva(
  "text-white-400 transition-colors hover:text-gold-400 text-lg",
);

type LinkProps = VariantProps<typeof linkVariants> &
  BaseLinkProps &
  ComponentPropsWithoutRef<"a">;

export const Link = ({ className, href, children, ...rest }: LinkProps) => {
  return (
    <BaseLink href={href} className={linkVariants({ className })} {...rest}>
      {children}
    </BaseLink>
  );
};
