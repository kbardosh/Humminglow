import { BookLink } from "./book-link";
import { Section, SectionHeading } from "./ui/section";
import PortraitImage from "../images/portrait.jpeg";

const Portrait = () => {
  return (
    <img
      className="rounded-xl object-cover"
      src={PortraitImage.src}
      width={580}
      height={685}
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          suscipit similique ullam dolore quasi maiores, reprehenderit saepe
          blanditiis, velit perferendis soluta quia. Consequatur adipisci quos
          placeat aperiam voluptatum modi animi. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolor, suscipit similique ullam dolore
          quasi maiores, reprehenderit saepe blanditiis, velit perferendis
          soluta quia. Consequatur adipisci quos placeat aperiam voluptatum modi
          animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolor, suscipit similique ullam dolore quasi maiores, reprehenderit
          saepe blanditiis, velit perferendis soluta quia. Consequatur adipisci
          quos placeat aperiam voluptatum modi animi. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Dolor, suscipit similique ullam
          dolore quasi maiores, reprehenderit saepe blanditiis, velit
          perferendis soluta quia. Consequatur adipisci quos placeat aperiam
          voluptatum modi animi.
        </p>

        <BookLink />
      </div>

      <div>
        <Portrait />
      </div>
    </Section>
  );
};
