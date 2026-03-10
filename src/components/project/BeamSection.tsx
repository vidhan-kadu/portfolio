import { FiExternalLink, FiGithub } from "react-icons/fi";
import { TracingBeam } from "../../ui/TraceBeam";
import AnimateOnView from "../AnimateOnView";
import { DirCard } from "../../ui/DirCard";
import { projectContent } from "./data";

function BeamSection() {
  return (
    <TracingBeam className="px-4 sm:px-6 mt-10 lg:mt-[6vh] w-full">
      <div className=" w-[80%] lg:max-w-4xl mx-auto antialiased pt-4 relative">
        {projectContent.map((item, index) => (
          <AnimateOnView key={`content-${index}`} delay={0.2 * index}>
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 sm:gap-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                    {item.title}
                  </h2>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 w-fit">
                    {item.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="text-xl sm:text-2xl cursor-pointer hover:scale-110 duration-300 text-primary/70 hover:text-primary" />
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="text-xl sm:text-2xl cursor-pointer hover:scale-110 duration-300 text-primary/70 hover:text-primary" />
                  </a>
                </div>
              </div>
              {/* Project Gallery */}
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-xl" />
                <div className="relative  border border-primary/10 rounded-3xl p-2 backdrop-blur-sm">
                  <div className="min-h-[100px] sm:h-[20vh] md:h-[50vh] w-full cursor-pointer rounded-3xl">
                    <DirCard imageUrl={item.image} className=" rounded-3xl">
                      <p className="font-bold text-xl">{item.title}</p>
                      <p className="font-normal text-sm">{item.subTitle}</p>
                    </DirCard>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className=" hidden md:block bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="   prose prose-primary max-w-none text-sm sm:text-base">
                  {item.description}
                </div>
              </div>
            </div>

            {/* Project Footer */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-20">
              <div className="flex flex-wrap items-center gap-2 text-primary/60 text-sm">
                <span className="">Tech Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((item) => (
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </TracingBeam>
  );
}

export default BeamSection;
