"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ children }: { children: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      if (isTyping) {
        // Typing phase
        for (let i = 0; i <= children.length; i++) {
          timeoutId = setTimeout(() => {
            setDisplayText(children.slice(0, i));
            if (i === children.length) {
              // Wait 2 seconds at full text, then start erasing
              setTimeout(() => {
                setIsTyping(false);
              }, 2000);
            }
          }, i * 100);
        }
      } else {
        // Erasing phase
        for (let i = children.length; i >= 0; i--) {
          timeoutId = setTimeout(() => {
            setDisplayText(children.slice(0, i));
            if (i === 0) {
              // Wait 1 second, then start typing again
              setTimeout(() => {
                setIsTyping(true);
              }, 1000);
            }
          }, (children.length - i) * 50);
        }
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, [isTyping, children]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {displayText}
      <motion.span
        className="inline-block w-1 h-8 bg-white ml-1 mt-2"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.span>
  );
};

export default Typewriter;
