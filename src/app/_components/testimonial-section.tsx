"use client";

import { Card, CardContent } from "./ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeading } from "./ui/section";
import BackgroundImage from "../images/hummingbirds.jpeg";

interface Testimonial {
  author: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    author: "Natalya Riessen",
    content:
      "Karina is so knowledgeable and professional! Her service is great and tailored to each patient. She knows her stuff! Loved my results and now I'm a repeat customer!",
    rating: 5,
  },
  {
    author: "Veronica Vak",
    content:
      "Had the best experience at Humminglow! I had my upper and lower face done with Botox, I absolutely loved it! Karina was extremely sweet, made me feel very comfortable, and followed up with me! She has a returning client 100%!",
    rating: 5,
  },
  {
    author: "Maria Campos",
    content:
      "I had an amazing experience with Karina. She's extremely knowledgeable and takes her time explaining any questions or concerns. I would recommend her to any of my family or friends. 💗",
    rating: 5,
  },
  {
    author: "tauba glukhoy",
    content:
      "So sweet & takes her time to answer any questions. Going back again in the future :)",
    rating: 5,
  },
  {
    author: "Evelina Drozhzhin",
    content:
      "Karina is truly amazing! From the moment I walked into the clinic, I was greeted with warmth and professionalism. During the consultation, she took the time to thoroughly explain the procedure, answer all my questions, and address any concerns I had. Her knowledge and expertise were evident, and I immediately felt confident that I was in capable hands. I would recommend Karina!",
    rating: 5,
  },
  {
    author: "Pamela C",
    content:
      "Wonderful service, such attention to detail, and she thoroughly explains everything. I would highly recommend Humminglow Aesthetics.",
    rating: 5,
  },
  {
    author: "anita Nassar",
    content:
      "I Had the best service with Karina! She was knowledgeable and very gentle! Highly recommend her and I am so happy that I found her!",
    rating: 5,
  },
  {
    author: "Laura Hernandez",
    content:
      "Karina is warm and welcoming. She listens to your goals and gives you a plan and the cost of that plan prior to treatment. Communication is great. If you have concerns regarding your appointment or after care she's only a text away. Also she's really gentle with her injections. I've had painful Botox injections from RNs with years of experience in the industry along other side effects. No bruising after treatment or notice that you did anything so you can go about your day like nothing happened. Book with Karina asap. Your face and confidence will be 10/10.",
    rating: 5,
  },
];
export const TestimonialsSection = () => {
  return (
    <Section
      className="w-full space-y-20"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <SectionHeading className="text-gold-400">
        What Our Client&apos;s Say
      </SectionHeading>
      <div className="px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/4"
              >
                <Card>
                  <CardContent className="p-6">
                    <blockquote
                      className="relative h-full space-y-4"
                      style={{
                        display: "grid",
                        gridTemplateRows: "minmax(0, 1fr) auto auto",
                      }}
                    >
                      <Quote
                        className="absolute -left-3 h-5 w-5 scale-x-[-1] transform fill-gold-400 stroke-gold-400"
                        aria-hidden="true"
                      />
                      <p className="overflow-hidden text-ellipsis text-sm leading-relaxed text-black-400">
                        {testimonial.content}
                      </p>
                      <div className="h-px bg-black-400/20" />
                      <footer className="space-y-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-gold-400 stroke-gold-400"
                                aria-hidden="true"
                              />
                            ),
                          )}
                        </div>
                        <p className="text-sm font-medium capitalize text-black-400">
                          {testimonial.author}
                        </p>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
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
