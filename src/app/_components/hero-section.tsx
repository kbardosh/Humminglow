import { Hero } from "./hero";

export const HeroSection = () => {
  return (
    <div
      className="flex items-center bg-red-50"
      style={{
        backgroundImage: `url(https://utfs.io/f/0h3ZZPNH4XVb3J92HWG1bOE2oWJBx4tLl0Iy6kcguHpzseZV)`,
        height: "calc(100vh - 6.5rem)",
      }}
    >
      <header className="relative -top-[8rem] flex-1 lg:bottom-20">
        <Hero />
      </header>
    </div>
  );
};
