"use client";

import { motion, useAnimate } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdError } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

import { requestService } from "../actions";

const services = [
  "Landing Page",
  "Porfolio",
  "E-commerce site",
  "Sass Website",
  "Blog Website",
];

function Contact() {
  const [status, setStatus] = useState<{ error: string; success: string }>({
    error: "",
    success: "",
  });
  const [interest, setInterest] = useState<string>(services[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [scope, animate] = useAnimate();

  async function handleSubmit(data: {
    email: string;
    name: string;
    message: string;
    requestedService: string;
  }) {
    if (!name || !message || !email) {
      await animate(scope.current, { rotate: "1deg" }, { duration: 0.1 });
      await animate(scope.current, { rotate: "-1deg" }, { duration: 0.1 });
      await animate(scope.current, { rotate: "0deg" }, { duration: 0.1 });
      return;
    }

    try {
      setIsLoading(true);
      await requestService({ ...data });
      setStatus({ success: "success", error: "" });
    } catch (error: unknown) {
      setStatus({ success: "", error: (error as Error).message });
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      setIsLoading(false);
      setTimeout(() => setStatus({ error: "", success: "" }), 2000);
    }
  }

  return (
    <section
      className="bg-[#6863ce] text-background overflow-hidden"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-between items-start flex-col md:flex-row"
      >
        <div className="w-full flex-1 px-10 py-5 md:py-10">
          <p className="text-3xl text-background capitalize leading-[50px] font-semibold">
            let&apos;s build
            <br />
            something <span className="text-[#F8B018]">cool</span> together
          </p>

          <div className="py-5">
            <p className="text-sm py-2">I am interested in...</p>
            <div className="flex justify-start items-center flex-wrap w-[70%]">
              {services.map((service) => (
                <p
                  onClick={() => setInterest(service)}
                  key={service}
                  className={`py-1 transition-all cursor-pointer px-2 rounded-sm text-sm m-2 ml-0 ${
                    interest === service
                      ? "bg-primary text-accent-foreground"
                      : "text-primary border-2 border-primary"
                  }`}
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ x: "100%" }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-1 px-10 py-5 md:py-10 flex justify-between items-start flex-col gap-4 md:w-[50%]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ name, email, message, requestedService: interest });
          }}
        >
          <input
            disabled={isLoading}
            placeholder="Your Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full py-1 px-2 rounded-sm focus:outline-primary"
          />
          <input
            disabled={isLoading}
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-1 px-2 rounded-sm focus:outline-primary"
          />
          <textarea
            disabled={isLoading}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-1 px-2 rounded-sm resize-none focus:outline-primary"
            rows={5}
          />
          <Button className="w-full" disabled={isLoading} ref={scope}>
            {isLoading ? (
              <Image src="/spin.svg" alt="spinner" width={24} height={24} />
            ) : status.error ? (
              <motion.span
                className="text-ellipsis overflow-hidden"
                initial={{ rotate: "90deg", opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
              >
                {status.error!}
                <MdError className="inline-block text-red-500" />
              </motion.span>
            ) : status.success ? (
              <motion.span
                initial={{ rotate: "90deg", opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
              >
                sent <FaCheckCircle className="inline-block text-[#47A248]" />
              </motion.span>
            ) : (
              <>
                <IoIosSend /> <span>submit</span>
              </>
            )}
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;
