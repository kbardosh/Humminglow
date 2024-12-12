import { FAQContent } from "./faq-content";

export const FAQSection = () => {
  return (
    <section className="h-screen bg-black-400 pt-6">
      <h1 className="text-center text-4xl font-bold text-gold-400 md:text-5xl">
        Frequently Asked Questions
      </h1>

      <FAQContent />
    </section>
  );
};
