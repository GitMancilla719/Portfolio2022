const stack = [
  "ReactJS",
  "TailwindCSS",
  "Redux",
  "RTK",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "NodeJS",
  "ExpressJS",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "REST API's",
  "Docker",
  "Git",
  "Github",
  "Postman",
];

const SkillsContainer = () => {
  return (
    <div className="md:w-[755px] sm:w-[595px] xs:w-[350px] xxs:w-[230px] bg-vsTheme-darkest rounded-md flex flex-col h-full my-4 p-5 px-5 border-dashed border-2 border-gray-600">
      <h1 className="text-gray-300 text-2xl rounded-md font-bold bg-vsTheme-darkest w-fit px-3 mt-[-40px] mb-3">
        My <span className="text-amber-500">Tech</span> Stack
      </h1>

      <div className="flex flex-col justify-start text-gray-300">
        <div className="flex flex-row flex-wrap items-center my-1">
          {stack.map((stack) => (
            <div
              key={stack}
              className="m-1 my-2 w-fit text-center border-2 border-gray-500 rounded-full px-5 py-1"
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
