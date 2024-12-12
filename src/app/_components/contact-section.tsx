import { ContactCard } from "./contact-card";
import { Section } from "./ui/section";
import Image from "../images/hummingbirds.jpeg";

export const ContactSection = () => {
  return (
    <Section
      id="contact"
      style={{
        backgroundImage: `url(${Image.src})`,
      }}
    >
      <ContactCard />
    </Section>
  );
};
