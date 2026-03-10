import { lazy, Suspense } from "react";
import Bottom from "../components/Bottom";
import Transition from "../components/Transition";
import { useInView } from "react-intersection-observer";
import { MobileDock } from "../components/MobileDock";

// Lazy-loaded components
const About = lazy(() => import("./About"));
const Experience = lazy(() => import("../components/experience/Experience"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./Skills"));

const Main = () => {
  // Track when each section enters the viewport
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [experienceRef, experienceView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [skillRef, SkilllsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-screen flex flex-col justify-center items-center relative">
      <div ref={aboutRef} className="w-full">
        <Suspense fallback={<SectionFallback name="About" />}>
          {aboutInView && <About />}
        </Suspense>
      </div>
      <div ref={experienceRef} className="w-full">
        <Suspense fallback={<SectionFallback name="Experience" />}>
          {experienceView && <Experience />}
        </Suspense>
      </div>
      <div ref={skillRef} className="w-full">
        <Suspense fallback={<SectionFallback name="Skills" />}>
          {SkilllsInView && <Skills />}
        </Suspense>
      </div>
      <div ref={projectsRef} className="w-full">
        <Suspense fallback={<SectionFallback name="Projects" />}>
          {projectsInView && <Projects />}
        </Suspense>
      </div>
      <Bottom />
      <div ref={contactRef} className="w-full">
        <Suspense fallback={<SectionFallback name="Contact" />}>
          {contactInView && <Contact />}
        </Suspense>
      </div>
      <MobileDock />
    </div>
  );
};

const SectionFallback = ({ name }: { name: string }) => (
  <div className="min-h-[300px] flex justify-center items-center text-primary text-lg font-semibold">
    Loading {name}...
  </div>
);

export default Transition(Main);
