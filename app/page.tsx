import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyHandoffFade } from "@/components/StickyHandoffFade";
import { AboutSection } from "@/components/sections/AboutSection";

function SectionFallback() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-5">
      <div className="loader-mark" aria-hidden="true" />
    </div>
  );
}

const InterestsSection = dynamic(
  () =>
    import("@/components/sections/InterestsSection").then((m) => m.InterestsSection),
  { loading: () => <SectionFallback />, ssr: true },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection),
  { loading: () => <SectionFallback />, ssr: true },
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/ExperienceSection").then(
      (m) => m.ExperienceSection,
    ),
  { loading: () => <SectionFallback />, ssr: true },
);

const BlogsSection = dynamic(
  () => import("@/components/sections/BlogsSection").then((m) => m.BlogsSection),
  { loading: () => <SectionFallback />, ssr: true },
);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <StickyHandoffFade />
      <main className="bg-white">
        <Hero />
        <div className="sticky-stack">
          <AboutSection />
          <div className="section-seam" aria-hidden="true" />
          <InterestsSection />
          <div className="section-seam" aria-hidden="true" />
          <ProjectsSection />
          <div className="section-seam" aria-hidden="true" />
          <ExperienceSection />
          <div className="section-seam" aria-hidden="true" />
          <BlogsSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
