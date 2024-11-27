"use client";

import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { useRouter } from "next/navigation";

function Social() {
  const router = useRouter();

  function handleNavigate(url: string) {
    router.push(url);
  }

  return (
    <div className="flex justify-between items-center gap-1">
      <div
        onClick={() => handleNavigate(`https://www.facebook.com/Obiski15`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-facebook`}
      >
        <FaFacebookF className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => handleNavigate(`https://www.github.com/Obiski15`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-github`}
      >
        <IoLogoGithub className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => handleNavigate(`https://www.x.com/_obiski`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-x`}
      >
        <FaXTwitter className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => handleNavigate(`https://www.instagram.com/_obiski`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-instagram`}
      >
        <CiInstagram className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div
        onClick={() => handleNavigate(`https://www.linkedin.com/in/Obiski15`)}
        className={`w-8 h-8 rounded-full cursor-pointer relative bg-linkedin`}
      >
        <FaLinkedin className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
    </div>
  );
}

export default Social;
