const AboutContainer = () => {
  return (
    <div className="md:w-[755px] sm:w-[595px] xs:w-[350px] xxs:w-[230px] bg-vsTheme-darkest rounded-md flex flex-col h-full my-5 mt-6 p-5 px-5 border-dashed border-2 border-gray-600 text-gray-300">
      <h1 className="text-gray-300 text-2xl rounded-md font-bold bg-vsTheme-darkest w-fit px-3 mt-[-40px] mb-3">
        About <span className="text-amber-500">Me</span>
      </h1>

      <p className="m-1">
        I am an{" "}
        <b className="text-amber-500">Entry Level Fullstack Web Developer</b>{" "}
        who mainly uses the MERN stack, but is still open into exploring other
        interesting technologies and frameworks.
      </p>

      <p className="m-1 my-2">
        I mostly enjoy doing the Backend part of development, but has no problem
        doing Frontend work even though I am not on the artistic side.
      </p>

      <p className="m-1 my-2">
        If you are looking for a developer to add into your roster, I'd love to
        get in touch with you!
      </p>
    </div>
  );
};

export default AboutContainer;
