"use client";

import { useEffect, useState } from "react";

function NumProjects() {
  const [count, setCount] = useState<string | number>("...");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("https://api.github.com/users/Obiski15");
        const profile = await res.json();
        if (!res.ok) throw new Error("unkown error");
        setCount(profile.public_repos);
      } catch (error: unknown) {
        console.log(error);
        setError("...");
      }
    }

    fetchProfile();
  }, []);

  return <h1 className="text-5xl font-semibold">{count || error}</h1>;
}

export default NumProjects;
