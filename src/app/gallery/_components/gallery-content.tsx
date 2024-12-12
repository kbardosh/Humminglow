"use client";

import { api } from "~/trpc/react";
import { Spinner } from "../../_components/ui/spinner";
import { useState } from "react";
import { GalleryDialog } from "./gallery-dialog";
import { Gallery, PrismaClient } from "@prisma/client";

export const GalleryContent = () => {
  const query = api.gallery.get.useQuery();

  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  if (query.isLoading || query.isPending) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner size="lg" color="gold" />
      </div>
    );
  }

  if (query.isError)
    return <p className="text-red-500">{query.error.message}</p>;

  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {query.data.map((image) => (
          <button
            key={image.id}
            onClick={() => {
              setSelectedImage(image);
            }}
          >
            <div className="group relative w-full max-w-sm flex-grow basis-64 overflow-hidden rounded-lg transition-all hover:scale-105">
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.fileName}
                  className="h-full w-full object-cover duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </button>
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
