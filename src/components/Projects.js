export default function Projects({ animtaion, filterItems }) {
  return filterItems.map((port, i) => (
    <div
      key={i}
      style={{ backgroundColor: `${port.bgColor}` }}
      className={`col-span-1 flex items-center px-2 relative group overflow-hidden flex-col py-2 duration-300 ease-out h-fit max-h-[360px]
      xs:min-h-[280px] 
      lg:min-h-[320px] 
      ${animtaion ? "scale-0" : "scale-300"}
      xs:h-fit xs:gap-3 
      md: md:gap-8`}
    >
      <img
        loading="lazy"
        src={port.logoImg}
        alt={port.name}
        className=" flex self-end
        xs:w-[70px]
        md:w-[80px] 
        lg:w-[75px] "
      />
      <figure>
        <img
          loading="lazy"
          src={port.proImg}
          alt={port.name}
          className="w-full 
          xs:max-h-[210px]
          md:max-h-[190px]
          lg:max-h-[220px]
          "
        />
        <figcaption
          className="text absolute flex flex-col text-white bg-color4 w-[98%] -bottom-40 px-3 py-2 duration-300 ease-out
      opacity-0 invisible left-1
      group-hover:bottom-1 group-hover:visible group-hover:opacity-100
      xs:h-fit 
      md:h-fit md:gap-1"
        >
          {/* companie name & project type */}
          <h3
            className="font-semibold capitalize
        xs:text-lg
        md:text-xl "
          >
            {port.name}
          </h3>
          <h4
            className=" w-full text-pretty leading-relaxed 
          xs:text-[14px]
          sm:text-sm
          md:text-[13px] 
          lg:text-sm
         "
          >
            {port.des}
          </h4>
          {/* languages used */}
          <div className="flex gap-2">
            {port.langs.map((lang, i) => (
              <p
                key={i}
                id={`by ${lang}`}
                className="text-xs text-gray-500 capitalize
            xs:text-[8px] 
            sm:text-[12px] 
            md:text-[10px] 
            lg:text-xs"
              >
                #{lang}
              </p>
            ))}
          </div>
        </figcaption>
      </figure>
    </div>
  ));
}
