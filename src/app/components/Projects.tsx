"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";

interface IProject {
  name: string;
  url: string;
  repo: string;
  image: string;
  technologies: string[];
}

function Projects() {
  const router = useRouter();

  const projects: IProject[] = [
    {
      name: "Devlinks",
      url: "https://tinyurl.com/56xh2vu7",
      repo: "https://www.github.com/DevLinks",
      image: "/projects/devlinks.png",
      technologies: ["Next.js", "Tailwind CSS", "React-query", "Typescript"],
    },
    {
      name: "Ruvid Store",
      url: "https://tinyurl.com/msusmad4",
      repo: "https://www.github.com/ruvid-store",
      image: "/projects/ruvid-store.png",
      technologies: ["React", "Node.js", "React-query", "Styled-Components"],
    },
    {
      name: "Notes",
      url: "https://tinyurl.com/3z5a4e3h",
      repo: "https://github.com/Obiski15/notes",
      image: "/projects/notes.png",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
    },
    {
      name: "Coinbank",
      url: "https://tinyurl.com/yc3w7m3r",
      repo: "https://github.com/Obiski15/Coinbank-FE",
      image: "/projects/coinbank.png",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
      ],
    },
    {
      name: "Tripma",
      url: "https://tinyurl.com/33enkhdn",
      repo: "https://github.com/Obiski15/tripma",
      image: "/projects/tripma.png",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Typescript"],
    },
    {
      name: "Tattoo Shop",
      url: "https://tinyurl.com/y43j5yun",
      repo: "https://github.com/Obiski15/Tattoo-Shop",
      image: "/projects/tattoo-shop.png",
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      name: "My portfolio",
      url: "https://tinyurl.com/4b6u94ty",
      repo: "https://www.github.com/portfolio",
      image: "/projects/my-portfolio.png",
      technologies: ["Next.js", "Framer motion", "Tailwind CSS", "Typescript"],
    },
  ];

  const leftProjects: IProject[] = projects.slice(
    0,
    Math.round(projects.length / 2)
  );
  const rightProjects: IProject[] = projects.slice(
    Math.round(projects.length / 2)
  );

  return (
    <section className="bg-custom-gradient pb-5 overflow-hidden" id="projects">
      <div className="px-10 py-5 text-center capitalize tracking-widest ">
        <h1 className="text-secondary text-3xl font-semibold">
          My Recent Projects
        </h1>
        <p className="text-sm text-accent py-1">
          some things i have built so far
        </p>
      </div>
      <div className="flex justify-between items-start flex-col gap-4 md:gap-0 md:flex-row">
        <div className="w-full flex-1 pt-10 flex flex-col justify-start items-start gap-4 px-10">
          {leftProjects.map(({ name, url, image, technologies }) => (
            <motion.figure
              key={name}
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full max-w-[400px] mx-auto"
            >
              <div className="flex gap-1 text-[10px] py-1">
                {technologies.map((technology, i) => (
                  <p key={i + 1} className="rounded-sm bg-[#6863ce] px-1">
                    {technology}
                  </p>
                ))}
              </div>
              <div className="h-[200px] relative rounded-sm">
                <Image
                  src={image}
                  alt={name}
                  className="object-cover w-full rounded-sm"
                  fill={true}
                />
              </div>

              <figcaption className="flex justify-between items-center">
                <p className="capitalize font-medium">{name}</p>
                <Link
                  href={url}
                  target="_blank"
                  className="text-secondary text-right cursor-pointer capitalize hover:underline"
                >
                  live url <GoArrowUpRight className="inline-block" />
                </Link>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="w-full flex-1 pb-10 flex flex-col justify-start items-start gap-4 px-10">
          {rightProjects.map(({ name, url, image, technologies }) => (
            <motion.figure
              key={name}
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full max-w-[400px] mx-auto"
            >
              <div className="h-[200px] relative rounded-sm">
                <Image
                  src={image}
                  alt={name}
                  className="object-cover w-full rounded-sm"
                  fill={true}
                />
              </div>

              <div className="flex gap-1 text-[10px] py-1">
                {technologies.map((technology, i) => (
                  <p key={i + 1} className="rounded-sm bg-[#6863ce] px-1">
                    {technology}
                  </p>
                ))}
              </div>

              <figcaption className="flex justify-between items-center">
                <p className="capitalize font-medium">{name}</p>
                <Link
                  href={url}
                  target="_blank"
                  className="text-secondary text-right cursor-pointer capitalize hover:underline"
                  onClick={() => router.push(url)}
                >
                  live url <GoArrowUpRight className="inline-block" />
                </Link>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
