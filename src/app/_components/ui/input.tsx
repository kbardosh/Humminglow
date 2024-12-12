import * as React from "react";
import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
}

const Input = React.forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  InputProps
>(({ className, type, multiline, ...props }, ref) => {
  const baseStyles =
    "flex w-full rounded-sm border bg-black-400/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-white-400";

  if (multiline) {
    return (
      <textarea
        ref={ref}
        className={cn(
          baseStyles,
          "min-h-[120px] border-gold-400 focus-visible:ring-gold-400",
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <input
      type={type}
      className={cn(
        baseStyles,
        "h-10 border-gold-400 focus-visible:ring-gold-400",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
