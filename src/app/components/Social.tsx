import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import React from "react";
import Link from "next/link";

const gradients = {
  facebook: "linear-gradient(to top right, #ffffff, #2B54F3 )",
  instagram: "linear-gradient(to top right, #CA199A, #3E53D1 )",
  github: "linear-gradient(to top right, #181717,  #6e7681 )",
  x: "linear-gradient(to top, #71767B, #000000 )",
  linkedin: "linear-gradient(to top right, #0077B5, #ffffff )",
};

const socials = [
  { url: "https://www.facebook.com/obiski15", Icon: FaFacebookF },
  { url: "https://www.github.com/Obiski15", Icon: IoLogoGithub },
  { url: "https://www.x.com/_obiski", Icon: FaXTwitter },
  { url: "https://www.instagram.com/_obiski", Icon: CiInstagram },
  { url: "https://www.linkedin.com/in/obiski15", Icon: FaLinkedin },
];

function Social() {
  return (
    <div className="flex justify-between items-center gap-1">
      {socials.map(({ url, Icon }, i) => {
        const platform = url.split(".")[1];

        return (
          <Link
            style={{
              backgroundImage: gradients[platform as keyof typeof gradients],
            }}
            key={i}
            target="_blank"
            href={url}
            className={"w-8 h-8 rounded-full cursor-pointer relative"}
          >
            <Icon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
