import Button from "../ui/Button";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-dark text-white lg:px-[10rem] px-6 py-[3rem] pb-[6rem]"
    >
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Button href="#contact" className="mt-6">
          Contact Me
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-14 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
