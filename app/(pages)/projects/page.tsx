import { Separator } from "@radix-ui/react-dropdown-menu";
import { Metadata } from "next";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/lib/projects.utils";

export const revalidate = 3600 * 24; // revalidate the data at most every day

export const metadata: Metadata = {
  title: "Projects",
  description:
    "You can find some of our key projects that we've completed so far. There are the example of our works so you can get confidence on us.",
}; // TODO: Update the projects description

export default async function Projects() {
  const projects = await getAllProjects();

  if (!projects) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Our Projects</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-10">
        Here are some of the projects we’ve worked on. Click on any project to
        learn more about it.
      </p>

      <Separator className="my-8" />

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            slug={project.slug!}
            name={project.name}
            description={project.description}
            image={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
