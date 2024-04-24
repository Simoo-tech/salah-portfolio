import { IoMdArrowRoundForward } from "react-icons/io";
import { personalInfo } from "../../Data";
import cv from "../../assets/Salah -Cv's.pdf";

export const PersonalInfo = () => {
  const lists = personalInfo.map((list, i) => {
    return (
      <li
        key={i}
        className="w-6/12 mb-5 text-[17px] text-gray-300 gap-1 flex 
      xs:flex-col xs:text-[16px] 
      md:flex-row md:text-lg"
      >
        {list.name}:<span className="font-medium text-white">{list.val}</span>
      </li>
    );
  });

  return (
    <div
      id="personal-info"
      className="flex justify-between mb-20
    xs:flex-col xs:items-center xs:gap-10
    lg:flex-row lg:items-start lg:gap-0"
    >
      {/* info */}
      <div
        id="info"
        className="flex flex-col gap-8
      xs:w-full
      md:w-10/12
      lg:w-6/12"
      >
        <h3 className="text-2xl font-bold w-full">PERSONAL INFO</h3>
        <ul className="w-full flex flex-wrap">{lists}</ul>
        <div className="links flex w-full gap-5">
          <a
            href={cv}
            download="Salah-Eldin-Cv's"
            className=" border-2 border-color3 rounded-full flex items-center
            uppercase relative font-medium group duration-300
            xs:h-[48px] xs:w-[190px] xs:justify-end xs:pr-5 xs:hover:pr-9
            md:h-[52px] md:w-[220px] md:justify-center md:pr-0 md:hover:pr-0"
          >
            <span className="relative z-10"> Download cv</span>
            <span
              className="absolute left-0 h-full bg-color3 w-[45px] p-1 rounded-full flex justify-center items-center duration-300
              group-hover:w-full group-hover:justify-end"
            >
              <IoMdArrowRoundForward
                size={25}
                className="group-hover:rotate-90 group-hover:animate-pulse"
              />
            </span>
          </a>
        </div>
      </div>
      {/* rate and projects done */}
      <div
        id="rate"
        className="flex flex-wrap p-3 gap-5 justify-center
        xs:w-full
        md:w-10/12
        lg:w-6/12"
      >
        <div
          className="box border-2 h-[150px] rounded-lg border-color4 p-4 flex flex-col justify-center
        xs:px-5 xs:w-6/12
        md:w-5/12
        xl:px-10"
        >
          <p className="text-7xl text-color3 font-extrabold ">
            4<sup className="font-normal">+</sup>
          </p>
          <span
            className="relative flex items-start gap-5
      before:w-[30px] before:bg-color4 before:h-[0.5px] before:top-1 before:block before:mt-3"
          >
            YEARS OF <br />
            EXPERIENCE
          </span>
        </div>
        <div className="box w-5/12 h-[150px] rounded-lg border-2 border-color3" />
        <div className="box w-5/12 h-[150px] rounded-lg border-2 border-color3" />
        <div
          className="box border-2 h-[150px] rounded-lg border-color4 p-4 flex flex-col justify-center
        xs:px-5 xs:w-6/12
        md:w-5/12
        xl:px-10"
        >
          <p className="text-7xl text-color3 font-extrabold ">
            3<sup className="font-normal">+</sup>
          </p>
          <span
            className="relative flex items-start gap-5
      before:w-[30px] before:bg-color4 before:h-[0.5px] before:top-1 before:block before:mt-3"
          >
            COMPLETED <br />
            PROJECTS
          </span>
        </div>
      </div>
    </div>
  );
};
