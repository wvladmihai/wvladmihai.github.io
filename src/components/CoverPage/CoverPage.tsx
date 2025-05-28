import { MoveUpRight } from "lucide-react";

const CoverPage = () => {
  return (
    <div className="mt-[33vh]">
      <h1 className="text-6xl font-serif font-bold">Vlad Mihai Vasile</h1>
      <h2 className="text-2xl mt-2">Full-stack software developer</h2>

      <div className="mt-15 space-y-2">
        <div>
          <span className="font-bold">Phone: </span>+44 744 252 4075
        </div>
        <div>
          <span className="font-bold">Email: </span>
          <a href="mailto:vladlbe@protonmail.com">vladlbe@protonmail.com</a>
        </div>
        <div>
          <span className="font-bold">
            LinkedIn
            {
              <span className="[&>svg]:size-3 [&>svg]:inline">
                <MoveUpRight />
              </span>
            }{" "}
          </span>
          <a
            href="http://www.linkedin.com/in/vladvasile351/"
            target="_blank"
            className="italic"
          >
            http://www.linkedin.com/in/vladvasile351/
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
