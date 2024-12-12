import { GalleryContent } from "./gallery-content";

export const GallerySection = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-6 uppercase">
        <h2 className="text-4xl font-bold">Manage gallery</h2>
      </div>

      <GalleryContent />
    </div>
  );
};
