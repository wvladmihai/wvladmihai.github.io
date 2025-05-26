import CoverPage from "@/components/CoverPage/CoverPage";
import EducationSection from "@/components/EducationSection/EducationSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection/WorkExperienceSection";
import {
  BriefcaseBusiness,
  GraduationCap,
  LucideProps,
  Presentation,
} from "lucide-react";
import { JSX } from "react";

type SectionsType = {
  component: () => JSX.Element;
  navigatable?: {
    title: string;
    url: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  };
}[];

export const SECTIONS: SectionsType = [
  {
    component: CoverPage,
  },
  {
    component: WorkExperienceSection,
    navigatable: {
      title: "Work experience",
      url: "#workExperience",
      icon: BriefcaseBusiness,
    },
  },
  {
    component: ProjectsSection,
    navigatable: {
      title: "Projects",
      url: "#projects",
      icon: Presentation,
    },
  },
  {
    component: EducationSection,
    navigatable: {
      title: "Education",
      url: "#education",
      icon: GraduationCap,
    },
  },
];
