import { BookLink } from "./book-link";
import { Section, SectionHeading } from "./ui/section";

const Portrait = () => {
  return (
    <img
      className="h-[20rem] w-full rounded-xl object-cover object-top md:h-[40rem] md:w-[50rem]"
      src="https://9wvzne6phq.ufs.sh/f/0h3ZZPNH4XVbT3lWCLtLhv7gdxUAXOzplHQZ45SwCnMKjyFs"
      alt="Portrait of owner"
    />
  );
};

const JourneyImage = () => {
  return (
    <img
      className="h-[20rem] w-full rounded-xl object-cover object-center md:h-[40rem] md:w-[50rem]"
      src="https://9wvzne6phq.ufs.sh/f/0h3ZZPNH4XVby2Hq0OuvzRyQnEGUmqCcNiIx3rZSAB7HMhPX"
      alt="Karina's nursing journey"
    />
  );
};

const MissionImage = () => {
  return (
    <img
      className="h-[20rem] w-full rounded-xl object-cover object-center md:h-[40rem] md:w-[50rem]"
      src="https://9wvzne6phq.ufs.sh/f/0h3ZZPNH4XVbm47Hs03lHso4RxIwVOnN6WzcuPUjK9DBeGJT"
      alt="Humminglow Aesthetics Lounge"
    />
  );
};

export const AboutMeSection = () => {
  return (
    <Section id="about" className="flex flex-col gap-16 bg-brown-400 py-12">
      {/* Section Heading */}
      <div className="text-center">
        <div className="mx-auto h-1 w-24 bg-gold-400"></div>
      </div>

      {/* Part 1 - Left aligned (Welcome) */}
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-[37.5rem] space-y-5">
          <h3 className="text-2xl font-semibold text-gold-400 md:text-5xl">
            Welcome to Humminglow
          </h3>
          <p className="text-white-400">
            My name is Karina, and I am the owner and injector at Humminglow
            Aesthetics Lounge. I have been a Registered Nurse since 2017, and
            have been enjoying every minute of it!
          </p>
          <BookLink />
        </div>

        <div>
          <Portrait />
        </div>
      </div>

      {/* Part 2 - Right aligned (Journey) */}
      <div className="flex flex-col gap-6 xl:flex-row-reverse xl:items-center xl:justify-between">
        <div className="max-w-[37.5rem] space-y-5">
          <h3 className="text-2xl font-semibold text-gold-400 md:text-5xl">
            My Journey
          </h3>
          <p className="text-white-400">
            I started off my nursing career working in Gastroenterology, where I
            would assist and sedate patients for various procedures. Shortly
            after, I transitioned to working in the Operating Room, where my
            knowledge and passion for plastic surgery and other aesthetic
            procedures grew.
          </p>
          <BookLink />
        </div>

        <div>
          <JourneyImage />
        </div>
      </div>

      {/* Part 3 - Left aligned (Mission) */}
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-[37.5rem] space-y-5">
          <h3 className="text-2xl font-semibold text-gold-400 md:text-5xl">
            My Mission
          </h3>
          <p className="text-white-400">
            I knew that I wanted to play a bigger role in helping people feel
            and look their best and thus, the journey to creating a place where
            anyone can achieve just that began! Humminglow Aesthetics Lounge was
            created with a major goal in mind to help you feel confident,
            refreshed, and beautiful in your own skin.
          </p>
          <BookLink />
        </div>

        <div>
          <MissionImage />
        </div>
      </div>

      {/* Decorative element */}
      <div className="flex justify-center">
        <div className="h-1 w-32 bg-gold-400"></div>
      </div>
    </Section>
  );
};
