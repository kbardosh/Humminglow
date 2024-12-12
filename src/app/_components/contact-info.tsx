import { Socials } from "./socials";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6 text-white-400">
      <div className="flex gap-2">
        <span className="block">Address:</span>
        <span>420 Palladio Parkway suite 123, Folsom CA 95630</span>
      </div>
      <div className="flex gap-2">
        <span>Phone:</span>
        <span>(916) 510-7916</span>
      </div>
      <div className="flex gap-2">
        <span>Email:</span>
        <span>humminglow.aesthetics@gmail.com</span>
      </div>

      <Socials />
    </div>
  );
};
