import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { GithubActivity } from "@/components/github-activity";
import { ExperienceSection } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>
      <main className="relative min-h-screen">
        <div className="mx-auto max-w-4xl border-x border-[color:var(--border)]">
          <Nav />
          <Hero />
          <GithubActivity />
          <section id="experience">
            <ExperienceSection />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
