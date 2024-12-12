import { FAQContent } from "./faq-content";

export const FAQSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        <h2 className="text-4xl font-bold uppercase">Manage FAQs</h2>
      </div>

      <FAQContent />
    </div>
  );
};
