import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarTrigger } from "../shadcn-ui/sidebar";
import DownloadCVArea from "../DownloadCVArea/DownloadCVArea";
import { SECTIONS } from "@/constants/SectionNavigationLinks";

const NavBarArea = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <header>
      <div className="flex items-center p-5">
        <div className="flex-1/4"></div>
        <div className="flex-2/4 text-lg text-center">Curriculum vitae</div>
        <div className="flex-1/4 text-right">
          <nav>
            <SidebarTrigger />
          </nav>
        </div>
      </div>
      <DownloadCVArea />
    </header>
  ) : (
    <header>
      <div className="flex items-center p-5">
        <div className="flex-1/4 text-lg">Curriculum vitae</div>
        <div className="flex-3/4 text-right">
          <nav>
            <div className="space-x-5">
              {SECTIONS.map((navItem) => (
                <>
                  {navItem.navigatable && (
                    <a
                      key={`${navItem.navigatable.url}${navItem.navigatable.title}`}
                      href={navItem.navigatable.url}
                      className="text-md"
                    >
                      {navItem.navigatable.title}
                    </a>
                  )}
                </>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBarArea;
