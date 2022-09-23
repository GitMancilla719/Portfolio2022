import { projects } from "../projectList";

const ProjectContainer = () => {
  return (
    <div className="md:w-[755px] sm:w-[595px] xs:w-[350px] xxs:w-[230px] bg-vsTheme-darkest rounded-md flex flex-col h-full my-4 p-5 px-5 border-dashed border-2 border-gray-600 text-gray-400">
      <h1 className="text-gray-300 text-2xl rounded-md font-bold bg-vsTheme-darkest w-fit px-3 mt-[-40px] mb-3">
        My <span className="text-amber-500">Works</span>
      </h1>

      <div className="sm:px-5 xs:px-0">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-vsTheme-light flex flex-col justify-center my-3 p-4 px-7 rounded-xl w-full h-fit"
          >
            <h1 className="font-kanit text-2xl text-gray-300">{proj.title}</h1>
            <p className="">{proj.desc}</p>

            <div className="p-1 flex flex-row bg-vsTheme-darkest justify-evenly mt-2 rounded-xl font-semibold w-full md:text-base xs:text-sm">
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noreferrer">
                  LIVE
                </a>
              )}

              {proj.client && (
                <a href={proj.client} target="_blank" rel="noreferrer">
                  CLIENT
                </a>
              )}

              {proj.api && (
                <a href={proj.api} target="_blank" rel="noreferrer">
                  API
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
