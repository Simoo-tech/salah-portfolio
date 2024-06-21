import { skills } from "../../Data";

export default function Skills() {
  const skillShape = skills.map((skill, i) => {
    return (
      <div
        key={i}
        id="skill"
        className={`w-full flex flex-col relative gap-1 justify-center items-center`}
      >
        <p className="xs:text-base md:text-lg lg:text-xl font-medium uppercase border-b-2 border-transparent hover:border-white">
          {skill.name}
        </p>
      </div>
    );
  });

  return (
    <div id="skill" className="flex justify-center flex-col items-center">
      <h4 className="text-2xl font-bold uppercase pt-10 border-t-2 text-center border-color4 w-6/12">
        my skills
      </h4>
      <div className="w-full my-16 grid gap-8 xs:grid-cols-2 md:grid-cols-3 ">
        {skillShape}
      </div>
    </div>
  );
}
