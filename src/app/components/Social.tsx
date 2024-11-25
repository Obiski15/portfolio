"use client";

import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { useRouter } from "next/navigation";

function Social() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-1">
      <div
        onClick={() => router.push(`https://www.facebook.com/_obiski`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-facebook`}
      >
        <FaFacebookF className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => router.push(`https://www.github.com/_obiski}`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-github`}
      >
        <IoLogoGithub className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => router.push(`https://www.x.com/_obiski`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-x`}
      >
        <FaXTwitter className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => router.push(`https://www.instagram.com/_obiski}`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-instagram`}
      >
        <CiInstagram className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => router.push(`https://www.linkedin.com/_obiski}`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-linkedin`}
      >
        <FaLinkedin className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
    </div>
  );
}

export default Social;
