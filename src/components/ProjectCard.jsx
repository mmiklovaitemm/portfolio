import Button from "../ui/Button";

export default function ProjectCard({ project }) {
  return (
    <article>
      <div className="relative w-full">
        <picture>
          <source srcSet={project.imageLarge} media="(min-width: 1024px)" />
          <img
            src={project.imageSmall}
            alt={project.title}
            className="w-full aspect-[4/3] object-cover"
          />
        </picture>
      </div>

      <h3 className="mt-6 text-2xl font-bold uppercase">{project.title}</h3>

      <p className="mt-2 text-gray uppercase flex flex-wrap gap-x-4 gap-y-2">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </p>

      <div className="mt-4 flex gap-6">
        <Button href={project.liveUrl}>View Project</Button>
        <Button href={project.codeUrl}>View Code</Button>
      </div>
    </article>
  );
}
