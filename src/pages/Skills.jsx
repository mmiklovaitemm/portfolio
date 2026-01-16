import patternRings from "../assets/images/pattern-rings.svg";

export default function Skills() {
  const skills = [
    { name: "HTML", years: "4 Years Experience" },
    { name: "CSS", years: "4 Years Experience" },
    { name: "JavaScript", years: "4 Years Experience" },
    { name: "Accessibility", years: "4 Years Experience" },
    { name: "React", years: "3 Years Experience" },
    { name: "Sass", years: "3 Years Experience" },
  ];

  return (
    <section id="skills" className="bg-dark text-white px-6 py-10 m-[-1px]">
      <div
        className="
          max-w-[430px] mx-auto grid grid-cols-1 gap-8 text-center relative
          sm:max-w-[700px] sm:grid-cols-2 sm:text-left sm:gap-x-10 sm:gap-y-12 sm:py-14 sm:px-8
          lg:max-w-[1110px] lg:text-center lg:gap-y-14 lg:gap-x-8 lg:grid-cols-3 lg:pt-12 lg:pb-20 lg:px-8
        "
      >
        {skills.map((skill) => (
          <div key={skill.name}>
            <h3 className="text-[32px] leading-[40px] font-bold lg:text-[48px] lg:leading-[56px]">
              {skill.name}
            </h3>
            <p className="mt-1 text-gray sm:mt-2 lg:mt-3">{skill.years}</p>
          </div>
        ))}

        <div className="w-full border-b border-white mt-6 relative sm:hidden lg:hidden">
          <img
            src={patternRings}
            alt=""
            className="right-[-17rem] top-[-54px] absolute pointer-events-none select-none lg:right-[-8rem] lg:top-[6.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
