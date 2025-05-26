import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import DownloadCVArea from "../DownloadCVArea/DownloadCVArea";
import NavBarArea from "../NavBarArea/NavBarArea";
import ProfileArea from "../ProfileArea/ProfileArea";
import SideNav from "../SideNav/SideNav";
import { SECTIONS } from "@/constants/SectionNavigationLinks";

const Container = () => {
  const isMobile = useIsMobile();
  const sections = SECTIONS.map((item) => item.component);
  sections.push(() => <div className="mb-30"></div>);

  const renderedSections = () => {
    return (
      <>
        {sections.map((section, index) => (
          <React.Fragment key={`sec${index}`}>{section()}</React.Fragment>
        ))}
      </>
    );
  };

  return isMobile ? (
    <>
      <SideNav />
      <div>
        <div className="dark:bg-gray-400">
          <NavBarArea />
        </div>
        <div className="bg-[#b3d9ff] dark:bg-sky-950">
          <ProfileArea />
        </div>
        <div className="dark:bg-gray-400 overflow-hidden px-[12%] md:px-[18%]">
          {renderedSections()}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex-2/3 lg:flex-1 dark:bg-gray-400">
        <NavBarArea />
        <div className="px-[18%]">{renderedSections()}</div>
      </div>
      <div className="flex-1/3 lg:flex-1 bg-[#b3d9ff] dark:bg-sky-950">
        <div className="flex flex-col h-screen sticky top-0">
          <DownloadCVArea />
          <ProfileArea />
        </div>
      </div>
    </>
  );
};

export default Container;
