import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva("animate-spin rounded-full border-t-2 border-b-2", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-8 w-8",
      lg: "h-16 w-16",
    },
    color: {
      purple: "border-purple-500",
      blue: "border-blue-500",
      green: "border-green-500",
      red: "border-red-500",
      gold: "border-gold-400",
    },
  },
  defaultVariants: {
    size: "md",
    color: "purple",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size, color, className }) => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className={spinnerVariants({ size, color, className })}></div>
    </div>
  );
};
