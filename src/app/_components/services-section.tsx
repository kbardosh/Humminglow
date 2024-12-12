"use client";

import { Section, SectionHeading } from "./ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import ServiceImage from "../images/service.png";

import { TreatmentCard, type TreatmentCardProps } from "./treatment-card";

const treatments: TreatmentCardProps["treatment"][] = [
  {
    title: "Consultation (In Person)",
    category: "Consultations",
    price: 0,
    imageUrl: ServiceImage.src,

    descriptions: [
      {
        heading: "In-Person Consultation",
        text: "Consultations are an essential part of our process, allowing us to assess your needs and discuss your goals in person. During the consultation, our providers will evaluate your skin, discuss your aesthetic concerns, and recommend the best treatments tailored to your needs.",
      },
      {
        heading: "What to Expect During Your Consultation",
        text: "You’ll have the opportunity to ask questions, learn about the various treatment options available, and gain a clear understanding of what to expect. This ensures that you make informed decisions about your aesthetic journey.",
      },
    ],
  },
  {
    title: "Good Faith Exam",
    category: "Consultations",
    price: 0,
    imageUrl: ServiceImage.src,

    descriptions: [
      {
        heading: "Virtual Exam with Wendy Delgado, PA",
        text: "A virtual exam done by Wendy Delgado, PA, ensures that you are cleared for cosmetic procedures. Wendy and Karina work closely together to ensure that each patient is healthy and suitable for treatment.",
      },
      {
        heading: "Customized Treatment Plan",
        text: "Wendy and Karina collaborate to provide the perfect treatment plan tailored to your needs, ensuring the best results for your cosmetic procedure.",
      },
    ],
  },
  {
    title: "Botulinum Toxin Injections: New Patient",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,
    descriptions: [
      {
        heading: "What is Botox®, Dysport®, Xeomin®, aka, Neuromodulators?",
        text: "These products relax the muscles of the face and neck to diminish and prevent wrinkles. Lines/wrinkles that are present on the face without expression are called static lines. The use of these products can prevent such lines from ever forming.",
      },
      {
        heading: "How Long Do Results Last?",
        text: "Results typically last about 3 months. Oftentimes, the skin will look better for longer than 3 months. However, we recommend treatment every 3 months so that old wrinkles don’t have time to reform and new ones don’t appear.",
      },
      {
        heading: "Other Uses:",
        text: "These products can also be used for hyperhidrosis (excessive sweating). The injections are placed into the armpit. Botox® or Dysport® for sweating are very effective.",
      },
      {
        heading: "Botox® vs. Dysport®:",
        text: "Botox® and Dysport® are dosed differently, but the same number of injection sites are needed per treatment and the final cost is identical in most cases. Dysport® generally starts working faster than Botox®. Both are made of the same protein by different companies and are highly effective.",
      },
    ],
  },
  {
    title: "Botulinum Toxin: Return Patient",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,
    descriptions: [
      {
        heading: "What is Botox®, Dysport®, Xeomin®, aka, Neuromodulators?",
        text: "These products relax the muscles of the face and neck to diminish and prevent wrinkles. Lines or wrinkles that are present on the face without expression are called static lines. The use of these products can prevent such lines from ever forming.",
      },
      {
        heading: "How Long Do Results Last?",
        text: "Results typically last about 3 months. Oftentimes, the skin will look better for longer than 3 months. However, we recommend treatment every 3 months so that old wrinkles don’t have time to reform and new ones don’t appear.",
      },
      {
        heading: "Other Uses",
        text: "These products can also be used for hyperhidrosis (excessive sweating). The injections are placed into the armpit. Botox® or Dysport® for sweating are very effective.",
      },
      {
        heading: "Botox® vs. Dysport®",
        text: "Botox® and Dysport® are dosed differently, but the same number of injection sites are needed per treatment and the final cost is identical in most cases. Dysport® generally starts working faster than Botox®. Both are made of the same protein by different companies and are highly effective.",
      },
    ],
  },
  {
    title: "Facial Filler",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,
    descriptions: [
      {
        heading: "Plan Ahead",
        text: "Please plan your treatment to allow for several days or more of potential swelling, tenderness, and bruising.",
      },
      {
        heading: "Postpone If You Have Certain Conditions",
        text: "If you have an active cold sore/fever blister, canker sore, or shingles, you will need to postpone treatment. If you are prone to these conditions, contact us 1 week before treatment for recommendations.",
      },
      {
        heading: "Dental Work Restrictions",
        text: "No Vycross® fillers (Voluma®, Vollure®, Volbella®) should be done within 2 weeks of any dental work or dental cleaning.",
      },
      {
        heading: "Inform Us of New Medications",
        text: "If you’ve started any antibiotics or other medications since your initial visit, please let us know.",
      },
      {
        heading: "Avoid Certain Medications and Supplements",
        text: "Avoid Advil®, Ibuprofen, Aleve®, Aspirin, Motrin®, Vitamin E, fish oil, St. John's Wort, and other non-steroidal anti-inflammatory products 5 days prior to treatment to decrease your risk of bruising. Do not stop prescribed medications without consulting your physician.",
      },
      {
        heading: "Medical History Disclosure",
        text: "Inform your Master Provider of all medical conditions, medications you are taking, skin disorders, allergies, history of anaphylaxis, and any other medical problems.",
      },
      {
        heading: "Avoid Alcohol",
        text: "Avoid drinking alcoholic beverages 48 hours before treatment to reduce the risk of bruising.",
      },
      {
        heading: "Consider Arnica for Bruising",
        text: "To reduce the risk of bruising, consider taking over-the-counter Arnica supplements if not contraindicated. Start taking oral Arnica 7-10 days before treatment as directed on the bottle.",
      },
      {
        heading: "Tear Trough Filler Precaution",
        text: "If you are having dermal filler placed in your tear trough, take an antihistamine (Claritin®, Zyrtec®, or Loratadine®) for 3 days prior to treatment to help reduce post-treatment swelling.",
      },
      {
        heading: "Pregnancy and Breastfeeding",
        text: "Women who are pregnant or breastfeeding cannot be treated.",
      },
      {
        heading: "Chemotherapy or Radiation Restrictions",
        text: "Patients actively undergoing chemotherapy or radiation treatment cannot be treated. Patients must be in remission for 12 months to be treated.",
      },
      {
        heading: "Accutane® Use",
        text: "If you have recently used the medication Accutane®, it is recommended to postpone treatment until at least six months after stopping the medication.",
      },
      {
        heading: "Tylenol® Use",
        text: "Tylenol® will not increase the chance of bruising and is preferred for the week prior to treatment. To help with possible discomfort, you may take acetaminophen (Tylenol®) one hour before your appointment. Do not exceed 3000mg of acetaminophen in a 24-hour period.",
      },
    ],
  },
  {
    title: "Lip Filler",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,
    descriptions: [
      {
        heading: "What are Lip Fillers?",
        text: "Lip fillers, such as the Juvederm® and Restylane® brands, are made from hyaluronic acid, a naturally occurring substance in our bodies. They can replace or add volume in our lips for plumper, fuller, or more defined lips.",
      },
      {
        heading: "Aging and Lip Changes",
        text: "As people age, our lips age with us, gradually becoming smaller and developing more vertical lines.",
      },
    ],
  },
  {
    title: "Lip Filler Touch Up",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,
    descriptions: [
      {
        heading: "Lip Filler Touch Up",
        text: "A Lip Filler touch-up is designed to enhance or maintain your previous lip filler treatment, ensuring optimal volume, symmetry, and definition.",
      },
    ],
  },
  {
    title: "Microneedling",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,

    descriptions: [
      {
        heading: "What is Microneedling?",
        text: "Microneedling is a procedure aimed at stimulating the body’s own collagen production to reduce the appearance of fine lines, pores, wrinkles, stretch marks, skin laxity, and scarring. Topical lidocaine, along with the high-speed automated needling motion, minimizes pain and discomfort.",
      },
      {
        heading: "Why Choose Medical-Grade Microneedling?",
        text: "Our medical-grade microneedling is far more efficient than any at-home needling/roller or manual procedure. At-home rollers cannot generate the same depth of microholes in the skin and will not yield the same consistent results.",
      },
    ],
  },
  {
    title: "Sculptra Injections",
    category: "Injectables",
    price: 0,
    imageUrl: ServiceImage.src,
    descriptions: [
      {
        heading: "What is Sculptra®?",
        text: "Sculptra® is an injectable solution that triggers the production of collagen, which helps rebuild areas affected by age-related volume loss and sagging. After your Sculptra® treatment at Humminglow Aesthetics Lounge, collagen production gradually increases, making the volume-enhancing results of the treatment apparent over time.",
      },
      {
        heading: "Benefits of Sculptra®",
        text: "Sculptra® can help improve the appearance of sagging jowls, hollow temples, and diminished cheeks, creating a fuller, more youthful appearance.",
      },
      {
        heading: "Longevity of Results",
        text: "Sculptra® has longer-lasting results compared to some other cosmetic dermal fillers like Restylane® and Juvederm®. The results can last for up to two years.",
      },
      {
        heading: "Treatment Plan",
        text: "In most patients, a total of 6 vials are needed, split between 3 treatments 6 weeks apart.",
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
