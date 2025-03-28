import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flexcol overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl wfull">
        <FloatingNav 
        navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
