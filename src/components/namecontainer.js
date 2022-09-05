import Svg from "./svg";
import Typed from "react-typed";

const NameContainer = () => {
  return (
    <div className="bg-vsTheme-darkest rounded-md flex justify-start items-center md:w-[755px] sm:w-[595px] xs:w-[350px] xxs:w-[230px] h-fit my-2 md:p-4 sm:p-3 sm:flex-row xxs:flex-col px-5 border-dashed border-2 border-gray-600">
      <Svg />

      <div className="bg-none px-2 sm:text-left xxs:text-center ">
        <h1 className="text-gray-100  md:text-6xl sm:text-5xl xs:text-5xl xs:leading-10 xxs:text-4xl xxs:leading-8 font-kanit">
          MARWEL <span className="text-amber-500">MANCILLA</span>
        </h1>

        <p className=" text-gray-300 sm:pb-0 md:text-3xl sm:text-3xl xxs:pb-4 xxs:leading-4 text-xl font-semibold">
          <Typed
            className="text-amber-500 md:text-3xl sm:text-3xl text-xl font-bold"
            strings={[" Backend ", " Frontend ", " Fullstack "]}
            typeSpeed={100}
            backSpeed={70}
            loop
          />
          web developer
        </p>
      </div>
    </div>
  );
};

export default NameContainer;
