"use client";

import { Section } from "~/app/_components/ui/section";
import { GalleryContent } from "./gallery-content";

export const GallerySection = () => {
  return (
    <section className="min-h-screen bg-black-400 pt-6">
      <h1 className="text-center text-4xl font-bold text-gold-400 md:text-5xl">
        Treatment Gallery
      </h1>

      <GalleryContent />
    </section>
  );
};
