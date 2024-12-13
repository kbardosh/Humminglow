import { ContactCard } from "./contact-card";
import { Section } from "./ui/section";

export const ContactSection = () => {
  return (
    <Section
      id="contact"
      style={{
        backgroundImage: `url(https://utfs.io/f/0h3ZZPNH4XVb3J92HWG1bOE2oWJBx4tLl0Iy6kcguHpzseZV)`,
      }}
    >
      <ContactCard />
    </Section>
  );
};
