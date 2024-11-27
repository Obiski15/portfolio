import { connection } from "next/server";

import Social from "@/app/components/Social";

async function Footer() {
  await connection();

  return (
    <div className="px-10 py-5 flex flex-col justify-between items-center gap-2 bg-linear text-center">
      <p>_obiski</p>
      <p className="capitalize">
        &copy; all rights reserved {new Date().getFullYear()}
      </p>
      <Social />
    </div>
  );
}

export default Footer;
