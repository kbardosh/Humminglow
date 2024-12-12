import Link from "next/link";
import { FacebookIcon } from "./icons/facebook-icon";
import { InstagramIcon } from "./icons/instagram-icon";
import { TikTokIcon } from "./icons/tiktok-icon";
import { YoutubeIcon } from "./icons/youtube-icon";

export const Socials = () => {
  return (
    <div className="flex gap-6">
      <Link
        href="https://www.instagram.com/humminglow.aesthetics"
        target="_blank"
        className="group block rounded-md transition-all hover:scale-105"
      >
        <InstagramIcon className="h-10 w-10 fill-white-400 transition-all group-hover:fill-gold-400" />
      </Link>
      <Link
        href="https://www.tiktok.com/@humminglow.aesthetics"
        target="_blank"
        className="group block rounded-md transition-all hover:scale-105"
      >
        <TikTokIcon className="h-10 w-10 fill-white-400 transition-all group-hover:fill-gold-400" />
      </Link>
      <Link
        href="https://www.youtube.com/@humminglow.aesthetics"
        target="_blank"
        className="group block rounded-md transition-all hover:scale-105"
      >
        <YoutubeIcon className="h-10 w-10 fill-white-400 transition-all group-hover:fill-gold-400" />
      </Link>
      <Link
        href="https://www.facebook.com/p/Humminglow-Aesthetics-Lounge-61556171490719/?locale=mt_MT"
        target="_blank"
        className="group block rounded-md transition-all hover:scale-105"
      >
        <FacebookIcon className="h-10 w-10 fill-white-400 transition-all group-hover:fill-gold-400" />
      </Link>
    </div>
  );
};
