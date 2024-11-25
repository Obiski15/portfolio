"use client";

import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

interface IProject {
  name: string;
  url: string;
  repo: string;
  image: string;
}

function Projects() {
  const router = useRouter();
  const projects: IProject[] = [
    {
      name: "devlinks",
      url: "https://obiski-link-sharing-app.vercel.app/links",
      repo: "https://www.github.com/DevLinks",
      image: "/devlinks.png",
    },
    {
      name: "Ruvid Store",
      url: "https://obiski-ruvid-store.vercel.app",
      repo: "https://www.github.com/ruvid-store",
      image: "/devlinks.png",
    },
    {
      name: "GeoTrackr",
      url: "https://geotrackr.vercel.app",
      repo: "https://www.github.com/GeoTrackr",
      image: "/devlinks.png",
    },
    {
      name: "Nacho Daddy",
      url: "https://nacho-daddy.vercel.app",
      repo: "https://www.github.com/nacho-daddy",
      image: "/devlinks.png",
    },
    {
      name: "My portfolio",
      url: "https://obiski.vercel.app",
      repo: "https://www.github.com/portfolio",
      image: "/devlinks.png",
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
    <section
      className="w-full bg-custom-gradient pb-5 overflow-hidden"
      id="projects"
    >
      <div className="px-10 py-5 text-center capitalize tracking-widest ">
        <h1 className="text-secondary text-3xl font-semibold">My Projects</h1>
        <p className="text-sm text-accent py-1">
          some things i have built so far
        </p>
      </div>
      <div className="flex justify-between items-start flex-col gap-4 md:gap-0 md:flex-row">
        <div className="w-full flex-1 pt-10 flex flex-col justify-start items-start gap-4 px-10">
          {leftProjects.map(({ name, url, repo, image }) => (
            <motion.figure
              key={name}
              initial={{ opacity: 0, x: "-100%" }}
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
          {rightProjects.map(({ name, url, repo, image }) => (
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
