"use client";

import { Section, SectionHeading } from "./ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { TreatmentCard, type TreatmentCardProps } from "./treatment-card";

const serviceSRC =
  "https://utfs.io/f/0h3ZZPNH4XVbf28M4TzBnTlVQsUuFew5tOh2Kp8XRdLiyk6b";

const treatments: TreatmentCardProps["treatment"][] = [
  {
    title: "Botulinum Toxin Injections",
    category: "Injectables",
    price: 0,
    imageUrl: 'https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZeb5fPMB6LfVokWXU2rFQOwaT531CYvjh8yMNc',
    descriptions: [
      {
        heading: "",
        text: "Botulinum toxins are neuromodulators that relax the muscles of the face and neck, to diminish and prevent wrinkles and fine lines.",
      },
    ],
  },
  {
    title: "Lip Filler",
    category: "Injectables",
    price: 0,
    imageUrl: "https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZeaV8z6HEg4QmlHMy1789ZfiedpR6E0NIhjAkF",
    descriptions: [
      {
        heading: "",
        text: "Lip filler is made from hyaluronic acid, a naturally occurring substance in our bodies. It can replace and add volume in our lips for plumper, fuller, and more defined lips.",
      },
  
    ],
  },
  {
    title: "Sculptra",
    category: "Injectables",
    price: 0,
    imageUrl: "https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZeYOBJaYLvihlY3zCy5pregGtJx1fnLmKuMcwQ",
    descriptions: [
      {
        heading: "",
        text: "Sculptra is made of poly-L-lactic acid (PLLA), that stimulates collagen and elastin production in the skin over the course of several months, resulting in improved skin tone and texture, enhanced facial volume, and increased skin elasticity.",
      },
  
    ],
  },
  {
    title: "Facial Filler",
    category: "Injectables",
    price: 0,
    imageUrl: "https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZen5bvsLKk7oYZFe5IQxVL148W3Bqhp9NCATya",
    descriptions: [
      {
        heading: "",
        text: "Filler that is strategically placed in order to create facial balancing, is aimed at enhancing the overall harmony and balance of facial features. This is a achieved by adjusting the proportions and volume of various facial elements to create a more aesthetically pleasing appearance.",
      },
  
    ],
  },
  {
    title: "Skincare",
    category: "Injectables",
    price: 0,
    imageUrl: "https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZeZ1j4F3nhBMKVoDZuNFqmxwRL9JUvz6ibHfCk",
    descriptions: [
      {
        heading: "",
        text: "Individualized medical grade skincare products for your specific skin needs, that are can improve skin tone, texture, radiance, and reduce the appearance of wrinkles and blemishes. ",
      },
  
    ],
  },
  {
    title: "Laser Treatments",
    category: "Injectables",
    price: 0,
    imageUrl: "https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZefF55sBrcFaY3vTnmpGShI2ugHAMdoECjXKz7",
    descriptions: [
      {
        heading: "",
        text: "The Aerolase laser is a non-invasive laser treatment that offers skin rejuvenation benefits such as: reducing wrinkles, fine lines, and age spots, improving skin texture and tone, and tightening and lifting the skin.",
      },
  
    ],
  },
  {
    title: "SkinPen Microneedling",
    category: "Injectables",
    price: 0,
    imageUrl: "https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZe4MxEZhAQdzvb3JqrHwZjelyO7hic9a5L1T0f",
    descriptions: [
      {
        heading: "",
        text: "The first FDA-cleared microneedling device SkinPen, targets facial acne scars, face and neck wrinkles, and helps stimulate collagen production, for smoother, more radiant, younger-looking skin.",
      },
      {
        heading: "",
        text: "Can be used in addition with platelet-rich plasma (PRP), which contains growth factors that promotes wound healing and collagen synthesis.",
      },
  
    ],
  },
];

export const ServicesSection = () => {
  return (
    <Section id="services" className="space-y-5 bg-brown-400">
      <SectionHeading>Services</SectionHeading>
      <p className="max-w-[30rem] text-white-400">
        Within our luxurious sanctuary, no concern goes unaddressed. We
        delicately treat you like a masterpiece in progress.
      </p>

      <div className="px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {treatments.map((treatment, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/4"
              >
                <TreatmentCard treatment={treatment} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
};
