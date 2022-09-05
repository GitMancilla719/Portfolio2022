const ProjectContainer = () => {
  return (
    <div className="md:w-[755px] sm:w-[595px] xs:w-[350px] xxs:w-[230px] bg-vsTheme-darkest rounded-md flex flex-col h-full my-4 p-5 px-5 border-dashed border-2 border-gray-600 text-gray-400">
      <h1 className="text-gray-300 text-2xl rounded-md font-bold bg-vsTheme-darkest w-fit px-3 mt-[-40px] mb-3">
        My <span className="text-amber-500">Works</span>
      </h1>

      <projects className="sm:px-5 xs:px-0">
        <project1 className="bg-vsTheme-light flex flex-col justify-center my-0 p-4 px-7 rounded-xl w-full h-fit">
          <h1 className="font-kanit text-2xl text-gray-300">
            CPCT: Cavite Provincial Covid Tracker
          </h1>
          <p className="">
            A Corona Virus Record Tracker for the Province of Cavite
          </p>

          <div className="flex flex-row bg-vsTheme-darkest justify-evenly mt-2 rounded-xl font-semibold w-full">
            <a
              href="https://cpct.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              LIVE DEMO
            </a>

            <a
              href="https://github.com/GitMancilla719/client.cpct"
              target="_blank"
              rel="noreferrer"
            >
              CLIENT REPO
            </a>

            <a
              href="https://github.com/GitMancilla719/api.cpct"
              target="_blank"
              rel="noreferrer"
            >
              API REPO
            </a>
          </div>
        </project1>
      </projects>
    </div>
  );
};

export default ProjectContainer;
