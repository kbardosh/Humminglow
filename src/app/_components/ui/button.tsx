import { type VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
} from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-gold-400 text-black-400 hover:bg-opacity-90",
        outline:
          "border-2 border-gold-400 text-black-400 hover:bg-gold-400",
        ghost: "text-gold-400 hover:bg-gold-400/10",
        destructive: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        default: "px-6 py-2.5",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-3 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  isLoading?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    as?: "button";
    href?: never;
    disabled?: boolean;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  ComponentPropsWithoutRef<"a"> & {
    as: "link";
    href: string;
    disabled?: boolean;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = forwardRef<ElementType, ButtonProps>(
  ({ className, variant, size, isLoading, as, disabled, ...props }, ref) => {
    const Component = as === "link" ? Link : "button";
    return (
      <Component
        className={buttonVariants({ variant, size, className })}
        // @ts-expect-error - typing refs is hard
        ref={ref}
        {...props}
        disabled={
          (disabled || isLoading) ?? (props as ButtonAsButtonProps).disabled
        }
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {props.children}
      </Component>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
