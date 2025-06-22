import * as motion from "motion/react-client";

import Progress from "./Progress";

const skills = [
  { skill: "HTML", progressLevel: 10 },
  { skill: "CSS", progressLevel: 9 },
  { skill: "Javascript", progressLevel: 9 },
  { skill: "React", progressLevel: 9 },
  { skill: "Next.js", progressLevel: 9 },
  { skill: "Tailwind CSS", progressLevel: 9 },
  { skill: "Typescript", progressLevel: 8 },
  { skill: "Node.js/Express.js", progressLevel: 8 },
  { skill: "MongoDB", progressLevel: 8 },
  { skill: "Python", progressLevel: 5 },
];

function Skills() {
  return (
    <section className="bg-radial" id="skills">
      <div>
        <h3 className="text-3xl md:text-5xl font-semibold px-10 py-5 flex items-center justify-start gap-2 tracking-wider md:py-10">
          My skills
        </h3>
        <div className="px-10 pt-5 pb-10 flex justify-between items-start flex-col min-[550px]:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col overflow-hidden gap-2 items-start justify-between flex-1"
          >
            {skills
              .slice(0, Math.round(skills.length / 2))
              .map(({ skill, progressLevel }, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between items-start lg:items-center lg:flex-row"
                >
                  <p className="w-[200px] pr-1">{skill}</p>
                  <Progress level={progressLevel} />
                </div>
              ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col gap-2 items-start justify-between flex-1"
          >
            {skills
              .slice(Math.round(skills.length / 2))
              .map(({ skill, progressLevel }, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between items-start lg:items-center lg:flex-row"
                >
                  <p className="w-[200px] pr-1">{skill}</p>
                  <Progress level={progressLevel} />
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
