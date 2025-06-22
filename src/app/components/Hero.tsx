import * as motion from "motion/react-client";

import HeroButtons from "./HeroButtons";
import Image from "next/image";
import Social from "./Social";
import Typewriter from "../../components/Typewriter";

function Hero() {
  return (
    <section
      className="bg-custom-gradient flex flex-col-reverse justify-between items-start gap-4 md:flex-row md:gap-0"
      id="home"
    >
      <div className="w-full flex flex-col gap-4 justify-between items-start py-10 px-5 md:w-[55%] sm:px-10">
        <div className="w-full text-2xl leading-[40px] font-bold capitalize  min-[870px]:text-4xl min-[870px]:leading-[60px]">
          <p>
            Hi <span className="lowercase">there👋 !</span>
          </p>
          <p>
            I&apos;m <span className="text-[#F8B018]">Obi Emmanuel</span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: "3deg" }}
            whileHover={{ rotate: "0deg" }}
            transition={{ ease: "easeOut" }}
            className="border-2 border-[rgb(104,99,206)] mt-4 mb-2 tracking-widest text-secondary w-fit relative cursor-pointer"
          >
            <Typewriter>Full-stack Developer</Typewriter>
            <span className="w-4 h-4 bg-[rgb(104,99,206)] absolute bottom-[-8px] right-[-6px] rounded-full"></span>
            <span className="w-4 h-4 bg-[rgb(104,99,206)] absolute bottom-[-8px] left-[-6px] rounded-full"></span>
            <span className="w-4 h-4 bg-[rgb(104,99,206)] absolute top-[-8px] right-[-6px] rounded-full"></span>
            <span className="w-4 h-4 bg-[rgb(104,99,206)] absolute top-[-8px] left-[-6px] rounded-full"></span>
          </motion.p>
        </div>

        <div className="text-sm md:w-[90%] leading-relaxed">
          I&apos;m a Full-stack Developer driven by a relentless curiosity to
          solve real-world problems through clean, scalable, and user-centered
          solutions. I don&apos;t just build features, I architect experiences.
          With a strong foundation in both frontend and backend logic, I
          specialize in transforming ideas and designs into high-performance
          applications that not only look great but work flawlessly under the
          hood. You could call me a product-minded engineer, a problem solver,
          or simply a fullstack addict — but at the core, I&apos;m someone who
          codes with intent, challenges convention, and thrives in the pursuit
          of better.
        </div>

        <HeroButtons />
        <Social />
      </div>

      <div className="w-full md:w-[45%] flex justify-center items-center pt-10">
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
          <Image
            src="/profile.png"
            alt="obi emmanuel"
            className="inline-block object-cover object-center"
            fill={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
