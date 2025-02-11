"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { TreatmentDetailsDialog } from "./treatment-details-dialog";

export interface TreatmentCardProps {
  treatment: {
    title: string;
    category: string;
    price: number;
    imageUrl: string;
    descriptions: { heading: string; text: string }[];
  };
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div>
        <div className="relative h-[25rem]">
          <img
            className="z-10 h-full w-full rounded-t-xl object-cover"
            src={treatment.imageUrl}
            alt={treatment.title}
          />
          <div className="absolute inset-0 z-20 rounded-t-xl bg-black-400/35" />
          <div className="absolute left-6 right-0 top-6 z-30">
            <h3 className="text-1xl font-semibold uppercase text-white-400">
              {treatment.category}
            </h3>
            <h2 className="absolute text-2xl font-semibold text-white-400">
              {treatment.title}
            </h2>
          </div>
        </div>

        <div className="relative -top-2 space-y-2 rounded-b-xl bg-black-400 p-6 z-20">
          <Button className="w-full" onClick={() => setIsDialogOpen(true)}>
            View Details
          </Button>
          {/* <div className="flex items-baseline justify-between">
            <div>
              <span className="text-sm font-light text-black-400/75">
                Starting from
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold">
                  ${treatment.price}
                </span>
              </div>
            </div>
            <span className="text-sm font-light text-black-400/75">
              Per Treatment
            </span>
          </div> */}
        </div>
      </div>

      <TreatmentDetailsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        treatment={treatment}
      />
    </>
  );
}
