import { Hero } from "./hero";

export const HeroSection = () => {
  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(https://utfs.io/f/0h3ZZPNH4XVb3J92HWG1bOE2oWJBx4tLl0Iy6kcguHpzseZV)`,
        height: "calc(100vh - 6.5rem)",
      }}
    >
      <header className="relative w-full pt-56">
        <Hero />
      </header>
    </div>
  );
};
