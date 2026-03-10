import ExperienceHeader from "./ExperienceHeader";
import ExperienceGrid from "./ExperienceGrid";
import AchievementsAndSkills from "./AchievementsAndSkills";

const Experience = () => (
  <div className="w-screen flex flex-col gap-10 justify-center items-center text-primary min-h-screen bg-primary">
    <div className="lg:w-[75%] w-full px-6 flex flex-col gap-10 mt-10 lg:mt-[15vh] lg:mb-10">
      <ExperienceHeader />
      <ExperienceGrid />
      <AchievementsAndSkills />
    </div>
  </div>
);

export default Experience;
