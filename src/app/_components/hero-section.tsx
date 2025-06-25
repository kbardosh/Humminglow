import { Hero } from "./hero";

export const HeroSection = () => {
  return (
    <div
      className="py-56"
      style={{
        backgroundImage: `url(https://utfs.io/f/0h3ZZPNH4XVb3J92HWG1bOE2oWJBx4tLl0Iy6kcguHpzseZV)`,
        height: "calc(100vh - 6.5rem)",
      }}
    >
      <header className="relative w-full">
        <Hero />
      </header>
    </div>
  );
};
