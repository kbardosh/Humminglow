import { BookLink } from "./book-link";
import { Section, SectionHeading } from "./ui/section";

const Portrait = () => {
  return (
    <img
      className="rounded-xl object-cover w-full h-[20rem] md:w-[50rem] md:h-[40rem] object-top"
      src="https://g19i0ofs1h.ufs.sh/f/6qEAXnDYaqZeaV8z6HEg4QmlHMy1789ZfiedpR6E0NIhjAkF"
      alt="Portrait of owner"
    />
  );
};

export const AboutMeSection = () => {
  return (
    <Section
      id="about"
      className="flex flex-col gap-6 bg-brown-400 xl:flex-row xl:justify-between"
    >
      <div className="max-w-[37.5rem] space-y-5">
        <SectionHeading>Welcome to Humminglow Aesthetics Lounge</SectionHeading>

        <p className="text-white-400">
        5 star rated injector, botulinum toxins, lip and facial filler, Sculptra biostimulator injections, laser treatments.
        </p>

        <BookLink />
      </div>

      <div>
        <Portrait />
      </div>
    </Section>
  );
};
