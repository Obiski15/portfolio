"use client";

import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      name: "devlinks",
      url: "https://obiski-link-sharing-app.vercel.app/links",
      repo: "https://www.github.com/DevLinks",
      image: "/devlinks.png",
      technologies: ["Next.js", "tailwind css", "React-query", "Typescript"],
    },
    {
      name: "Ruvid Store",
      url: "https://obiski-ruvid-store.vercel.app",
      repo: "https://www.github.com/ruvid-store",
      image: "/ruvid-store.png",
      technologies: ["React", "Nodejs", "React-query", "styled components"],
    },
    {
      name: "GeoTrackr",
      url: "https://geo-trackr.vercel.app",
      repo: "https://www.github.com/GeoTrackr",
      image: "/geotrackr.png",
      technologies: ["React", "Nodejs", "React-query", "styled components"],
    },
    {
      name: "AI text processing interface",
      url: "https://geo-trackr.vercel.app",
      repo: "https://github.com/Obiski15/hng-stage3-ai-text-processing-interface",
      image: "/ai-text-interface.png",
      technologies: ["Next.js", "Chrome AI", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Event Ticket Generator",
      url: "https://obiski-ticket-generator.vercel.app/",
      repo: "https://github.com/Obiski15/hng-stage2-ticket-generator",
      image: "/ticz.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Nacho Daddy",
      url: "https://nacho-daddy.vercel.app",
      repo: "https://www.github.com/nacho-daddy",
      image: "/nacho-daddy.png",
      technologies: [
        "React",
        "supabase",
        "React-query",
        "tailwind css",
        "redux",
      ],
    },
    {
      name: "Tattoo Shop",
      url: "https://obiski-tattoo-shop.vercel.app/",
      repo: "https://github.com/Obiski15/Tattoo-Shop",
      image: "/tattoo-shop.png",
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      name: "My portfolio",
      url: "https://obiski.vercel.app",
      repo: "https://www.github.com/portfolio",
      image: "/my-portfolio.png",
      technologies: ["Next.js", "Framer motion", "tailwind css", "Typescript"],
    },
    {
      name: "Tripma",
      url: "https://obiski-tripma.vercel.app",
      repo: "https://github.com/Obiski15/tripma",
      image: "/tripma.png",
      technologies: ["Next.js", "MongoDB", "tailwind css", "Typescript"],
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
                <p
                  className="text-secondary text-right cursor-pointer capitalize hover:underline"
                  onClick={() => router.push(url)}
                >
                  live url <GoArrowUpRight className="inline-block" />
                </p>
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
                <p
                  className="text-secondary text-right cursor-pointer capitalize hover:underline"
                  onClick={() => router.push(url)}
                >
                  live url <GoArrowUpRight className="inline-block" />
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
