"use client";

import { useState } from "react";
import { Button } from "../_components/ui/button";
import { Trash2 } from "lucide-react";
import { api } from "../../trpc/react";
import { GalleryForm } from "./gallery-form";
import { Gallery } from "@prisma/client";
import { GalleryDialog } from "../gallery/_components/gallery-dialog";

export const GalleryContent = () => {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);
  const utils = api.useUtils();
  const query = api.gallery.get.useQuery();
  const deleteMutation = api.gallery.delete.useMutation();

  const handleDeleteImage = async (id: number) => {
    deleteMutation.mutate(
      { id },
      {
        onSuccess: () => {
          utils.gallery.invalidate();
        },
      },
    );
  };

  if (query.isLoading || query.isPending) return <p>Loading...</p>;
  if (query.isError)
    return <p className="text-red-400">{query.error.message}</p>;

  return (
    <div>
      <div className="mb-6 space-y-4">
        <GalleryForm />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {query.data.map((image) => (
          <div
            key={image.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer"
          >
            <div className="relative h-[31.25rem] w-full overflow-hidden transition-all hover:scale-105">
              <img
                src={image.url}
                alt={image.fileName}
                width={600}
                height={800}
                className="h-full w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <Button
                isLoading={deleteMutation.isPending}
                variant="destructive"
                size="icon"
                className="absolute right-2 top-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the outer click
                  handleDeleteImage(image.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <GalleryDialog
        selectedImage={selectedImage}
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
