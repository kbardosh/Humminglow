import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { cn } from "~/lib/utils";
import { BookLink } from "./book-link";
import { type TreatmentCardProps } from "./treatment-card";

interface TreatmentDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Pick<
    TreatmentCardProps["treatment"],
    "descriptions" | "title" | "category" | "price"
  >;
}

export function TreatmentDetailsDialog({
  isOpen,
  onClose,
  treatment,
}: TreatmentDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={cn("z-50 max-w-2xl", "bg-white-400")}>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold capitalize">
            {`${treatment.title} (${treatment.category})`}
          </DialogTitle>
          <DialogDescription className="font-light capitalize text-black-400/75">
            {`Information about ${treatment.category} treatments`}
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="space-y-4">
          <div className="max-h-[20rem] space-y-2 overflow-auto">
            {treatment.descriptions.map((description, i) => (
              <div key={i}>
                <h2 className="font-semibold">{description.heading}</h2>
                <p className="text-muted-foreground whitespace-pre-wrap text-sm">
                  {description.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-4 pt-4">
            {/* <div className="flex flex-1 justify-between">
              <div>
                <span className="text-sm font-light text-black-400/75">
                  Starting from
                </span>
                <p className="text-2xl font-semibold">${treatment.price}</p>
              </div>
              <div>
                <span className="text-sm font-light text-black-400/75">
                  Per Treatment
                </span>
              </div>
            </div> */}
            <div className="space-x-2">
              <DialogClose asChild>
                <Button className="bg-white-400 !py-2" variant="outline">
                  Close
                </Button>
              </DialogClose>
              <BookLink />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
