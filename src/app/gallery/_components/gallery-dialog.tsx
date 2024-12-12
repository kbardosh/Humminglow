import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../../_components/ui/dialog";
import { Button } from "../../_components/ui/button";
import { X } from "lucide-react";
import { cn } from "~/lib/utils";
import { Gallery } from "@prisma/client";

interface GalleryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: Gallery | null;
}

export function GalleryDialog({
  isOpen,
  onClose,
  selectedImage,
}: GalleryDialogProps) {
  if (!selectedImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={cn("z-50 max-w-2xl", "space-y-6 bg-white-400")}>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold capitalize">
            Description
          </DialogTitle>
          <DialogDescription className="max-h-40 overflow-auto font-light capitalize text-black-400/75">
            {selectedImage.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mx-auto h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] 2xl:h-[35rem] 2xl:w-[35rem]">
          <img
            src={selectedImage.url}
            alt={selectedImage.description ?? "Gallery Image"}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="space-y-4">
          <div className="flex justify-end gap-4 pt-4">
            <div className="space-x-2">
              <DialogClose asChild>
                <Button className="!py-2">Close</Button>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
