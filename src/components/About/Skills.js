import { skills } from "../../Data";

export default function Skills() {
  const skillShape = skills.map((skill, i) => {
    return (
      <div key={i} id="skill" className={`w-full flex flex-col relative gap-1`}>
        <p className="text-lg absolute right-0">{skill.percent}%</p>
        <p className="xs:text-base md:text-lg font-light uppercase">
          {skill.name}
        </p>
        <div className="w-full h-[10px] rounded-lg bg-color4 relative">
          <div
            style={{ width: `${skill.percent}%` }}
            className={` absolute top-0 left-0 bg-color3 block h-full rounded-lg duration-300`}
          />
        </div>
      </div>
    );
  });

  return (
    <div id="skill" className="flex justify-center flex-col items-center">
      <h4 className="text-2xl font-bold uppercase pt-10 border-t-2 text-center border-color4 w-6/12">
        my skills
      </h4>
      <div className="w-full my-16 grid gap-8 xs:grid-cols-1 md:grid-cols-2 ">
        {skillShape}
      </div>
    </div>
  );
}
