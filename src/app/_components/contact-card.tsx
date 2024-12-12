import { ByAppointmentOnly } from "./by-appointment-only";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { SectionHeading } from "./ui/section";

export const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-xl bg-black-400 p-6 lg:grid-cols-2">
      <div className="space-y-6">
        <SectionHeading className="text-gold-400">
          Contact Information
        </SectionHeading>
        <p className="max-w-[27rem] text-white-400">
          Thank you for visiting our website. We are here to assist you with any
          inquires you may have.
        </p>

        <ByAppointmentOnly />

        <ContactInfo />
      </div>

      <div className="lg:flex lg:justify-end">
        <div className="lg:w-[30rem]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
