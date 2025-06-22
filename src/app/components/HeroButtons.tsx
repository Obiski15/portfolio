"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

function HeroButtons() {
  return (
    <div className="flex justify-between items-center gap-2">
      <Button variant="secondary" asChild>
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="mailto:obiski15@gmail.com"
          target="_blank"
        >
          Contact me
        </motion.a>
      </Button>

      <Button variant="outline" asChild>
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="/docs/emmanuel_mark_obi.pdf"
          download
          target="_blank"
          rel="noopener"
        >
          Resume
        </motion.a>
      </Button>
    </div>
  );
}

export default HeroButtons;
