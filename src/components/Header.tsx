"use client";

import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  function handleNav() {
    if (!isOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    if (isOpen) {
      document.documentElement.style.overflow = "auto";
    }
    setIsOpen((open) => !open);
  }

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(Math.ceil(window.scrollY));
    }

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    handleNav();
  }

  return (
    <header
      className={`sticky top-0 z-[999] ${
        scrollPosition === 0 ? "bg-linear" : "bg-[#ffffff19]"
      } backdrop-blur-md flex justify-between items-center px-10 py-5`}
    >
      <p>_obiski</p>

      <div
        className={`${
          !isOpen ? "translate-x-[-500%]" : ""
        } h-screen w-[70vw] fixed top-0 bottom-0 left-0 transition-all ease-in-out flex flex-col justify-start gap-1 items-start z-50 pt-20 pl-5 md:translate-x-0 bg-background md:bg-transparent md:static md:flex-row md:items:start md:w-auto md:h-auto md:pt-0 md:pl-0`}
      >
        <Button variant="ghost" onClick={() => handleScrollTo("home")}>
          home
        </Button>
        <Button variant="ghost" onClick={() => handleScrollTo("about")}>
          about
        </Button>
        <Button variant="ghost" onClick={() => handleScrollTo("projects")}>
          projects
        </Button>
        <Button variant="ghost" onClick={() => handleScrollTo("skills")}>
          skills
        </Button>
        <Button variant="outline" onClick={() => handleScrollTo("contact")}>
          let&apos;s talk!
        </Button>

        <IoCloseOutline
          className="absolute top-8 right-4 md:hidden w-6 h-6"
          onClick={handleNav}
        />
      </div>

      <RxHamburgerMenu className="md:hidden" onClick={handleNav} />
    </header>
  );
}

export default Header;
