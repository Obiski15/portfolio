import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/Obiski15");
  const profile = await res.json();

  return (
    <main className="flex-1 w-full">
      <Hero />

      <About repoCount={profile.public_repos} />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
