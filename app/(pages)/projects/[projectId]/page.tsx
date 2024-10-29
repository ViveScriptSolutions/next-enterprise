import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/projects.utils";

// Generate static params for all project pages
export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    projectId: project.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = await getProjectBySlug(params.slug);

  if (!project) return notFound();

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      publishedTime: project.createdAt?.toLocaleTimeString(),
      modifiedTime: project.updatedAt?.toLocaleTimeString(),
      type: "article",
    },
  };
}

// Main page component for project details
export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return notFound(); // Show 404 page if project not found
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">{project.name}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Project Image */}
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.name}
            width={700}
            height={400}
            className="rounded-md"
          />
        )}

        {/* Project Details */}
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Technologies Used:</h3>
              <ul className="list-disc list-inside mb-4">
                {project.technologies &&
                  project.technologies.length > 0 &&
                  project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
              </ul>

              <h3 className="text-xl font-semibold mb-2">Details:</h3>
              <p>{project.details}</p>

              <div className="flex gap-4 mt-6">
                <Link href={project.demoUrl || "#"} target="_blank">
                  <Button
                    className="bg-green-500 hover:bg-green-600"
                    disabled={!project.demoUrl}
                  >
                    View Demo
                  </Button>
                </Link>
                {project.repoUrl && (
                  <Link href={project.repoUrl} target="_blank">
                    <Button className="bg-gray-500 hover:bg-gray-600">
                      View Code
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
