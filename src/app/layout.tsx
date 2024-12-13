import "~/styles/globals.css";

import { Karla } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Humminglow Aesthetics Lounge",
  description:
    "Welcome to Humminglow Aesthetics Lounge, where your inner glow, beauty, and wellness converge, and treatments that will be personalized specially for you.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "./site.webmanifest",
};

const inter = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}