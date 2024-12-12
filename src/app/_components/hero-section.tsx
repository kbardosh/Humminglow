import { Hero } from "./hero";
import Image from "../images/hummingbirds.jpeg";

export const HeroSection = () => {
  return (
    <div
      className="flex items-center bg-red-50"
      style={{
        backgroundImage: `url(${Image.src})`,
        height: "calc(100vh - 6.5rem)",
      }}
    >
      <header className="relative -top-[8rem] flex-1 lg:bottom-20">
        <Hero />
      </header>
    </div>
  );
};
