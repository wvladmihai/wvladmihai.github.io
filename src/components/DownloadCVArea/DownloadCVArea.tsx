import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../shadcn-ui/button";

const DownloadCVButton = () => {
  return (
    <Button asChild>
      <a href="/CV_VladMihaiVasile2.pdf" download={"CV_VladMihaiVasile.pdf"}>
        Download CV
      </a>
    </Button>
  );
};

const DownloadCVArea = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="flex pb-3">
      <div className="flex-1 text-center">
        <DownloadCVButton />
      </div>
    </div>
  ) : (
    <div className="flex items-center p-5">
      <div className="flex-1/4 text-right">
        <DownloadCVButton />
      </div>
    </div>
  );
};

export default DownloadCVArea;
