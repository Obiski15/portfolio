"use client";

import { Button } from "@/components/ui/button";

function HeroButtons() {
  return (
    <div className="flex justify-between items-center gap-2">
      <Button
        variant="secondary"
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact me
      </Button>
      <Button variant="outline">Resume</Button>
    </div>
  );
}

export default HeroButtons;
