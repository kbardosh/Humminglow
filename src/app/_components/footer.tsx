import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";

import { Socials } from "./socials";

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <span>Address:</span>
        <span>420 Palladio Parkway suite 123, Folsom CA 95630</span>
      </div>
      <div className="flex flex-col">
        <span>Phone:</span>
        <span>(916) 510-7916</span>
      </div>
      <div className="flex flex-col">
        <span>Email:</span>
        <span>humminglow.aesthetics@gmail.com</span>
      </div>

      <div className="pt-3 max-md:flex max-md:justify-center">
        <Socials />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="space-y-6 bg-black-400 p-24 text-white-400">
      <div className="space-y-6 text-center md:flex md:items-center md:justify-between md:gap-6 md:text-left">
        <div>
          <h2 className="text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-4xl">
            Humminglow Aesthetics Lounge
          </h2>
          <div className="relative">
            <p className="text-base font-thin uppercase text-gold-400 text-shadow-glow-gold sm:text-lg md:text-xl lg:text-3xl">
              Unlock Your Inner Glow: <br />
              Where Beauty and Wellness Converge
            </p>
          </div>
        </div>

        <ContactInfo />
      </div>
      <hr className="border-t-4" />
      <div className="flex-1">
        <div className="flex flex-col items-center gap-6 text-center md:grid md:grid-cols-3 md:text-left">
          <span className="hidden md:block">
            © Humminglow Aesthetics Lounge 2024
          </span>

          <img
            src="https://utfs.io/f/0h3ZZPNH4XVbVhfPYgXOCeW8ZK1Asojd5mH2BcFhwuUlTy0p"
            alt="Logo"
            width={75}
            height={91.39}
            className="order-1 mx-auto md:order-none"
          />

          <div className="order-2 space-y-6 text-center md:text-right">
            <a href="/privacy-policy" className="block hover:text-gold-400">
              Privacy Policy
            </a>
            <span className="block md:hidden">
              © Humminglow Aesthetics Lounge 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
