"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Logo from "../images/logo.png";
import { Link } from "./ui/link";
import { BookLink } from "./book-link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black-400 p-2">
      <div className="grid grid-cols-2 items-center px-4 lg:grid-cols-3">
        <Link href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" width={75} height={91.39} />
        </Link>

        <div className="hidden items-center justify-center gap-8 lg:flex">
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <div className="hidden items-center justify-end lg:flex">
          <BookLink />
        </div>

        <div className="flex justify-end">
          <Button
            size="icon"
            className="relative h-10 w-10 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu
              className={`h-6 w-6 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
          </Button>
        </div>
      </div>

      <div
        className={`flex flex-col items-center space-y-4 overflow-hidden pb-2 transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/faq">FAQ</Link>
        <BookLink />
      </div>
    </nav>
  );
};
