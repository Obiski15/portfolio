import {
  SiMongodb,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandSupabase, TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";
import Loading from "../loading";

function About({ repoCount }: { repoCount: number | undefined }) {
  const icons: {
    Icon: IconType;
    color: string;
  }[] = [
    {
      Icon: FaHtml5,
      color: "#E34F26S",
    },
    {
      Icon: IoLogoCss3,
      color: "#1572B6",
    },
    {
      Icon: IoLogoJavascript,
      color: "#F7DF1E",
    },
    {
      Icon: FaReact,
      color: "#61DAFB",
    },
    {
      Icon: RiTailwindCssLine,
      color: "#06B6D4",
    },
    {
      Icon: SiRedux,
      color: "#764ABC",
    },
    {
      Icon: SiReactquery,
      color: "#FF4154",
    },
    {
      Icon: TbBrandSupabase,
      color: "#3ECF8E",
    },
    {
      Icon: RiNextjsLine,
      color: "#000000",
    },
    {
      Icon: TbBrandTypescript,
      color: "#3178C6",
    },
    {
      Icon: SiShadcnui,
      color: "#000000",
    },
    {
      Icon: SiStyledcomponents,
      color: "#DB7093",
    },
    {
      Icon: VscVscode,
      color: "#107ACC",
    },
    {
      Icon: FaNodeJs,
      color: "#339933",
    },
    {
      Icon: SiMongodb,
      color: "#47A248",
    },
  ];

  return (
    <section className="w-full bg-[#0E1329] overflow-hidden" id="about">
      <div className="flex justify-between items-center gap-4 p-5 overflow-scroll no-scrollbar">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-5xl font-semibold">1</h1>
          <p className="uppercase text-accent font-medium text:sm md:text-[16px]">
            year(s) of experience
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-5xl font-semibold">{repoCount}</h1>
          <p className="uppercase text-accent font-medium text:sm md:text-[16px]">
            projects/collabs
          </p>
        </div>

        {icons.map(({ Icon, color }, i) => (
          <div key={i + 1}>
            <Icon className={`w-10 h-10`} style={{ color }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
