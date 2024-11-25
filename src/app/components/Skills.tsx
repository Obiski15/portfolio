import * as motion from "motion/react-client";

import Progress from "./Progress";

function Skills() {
  return (
    <section className="w-full bg-radial" id="skills">
      <div>
        <h3 className="text-3xl md:text-5xl font-semibold px-10 py-10 flex items-center justify-start gap-2 tracking-wider">
          My skills
        </h3>
        <div className="px-10 pt-5 pb-10 flex justify-between items-start flex-col min-[550px]:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col overflow-hidden gap-2 items-start justify-between flex-1"
          >
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">HTML</p>
              <Progress level={9} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">CSS</p>
              <Progress level={9} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Javascript</p>
              <Progress level={8} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">React</p>
              <Progress level={8} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Tailwind CSS</p>
              <Progress level={8} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col gap-2 items-start justify-between flex-1"
          >
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Nextjs</p>
              <Progress level={6} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Typescript</p>
              <Progress level={5} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Node.js/Express</p>
              <Progress level={5} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Mongodb</p>
              <Progress level={5} />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
              <p className="w-[200px] pr-1">Python</p>
              <Progress level={2} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
