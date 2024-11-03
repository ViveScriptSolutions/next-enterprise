// components/ProjectCard.tsx

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  slug: string
  name: string
  description: string
  image?: string
}

const ProjectCard: FC<ProjectCardProps> = ({ slug, name, description, image }) => {
  return (
    <Card className="w-full p-4 md:w-1/2 lg:w-1/3">
      <CardHeader>
        <Image
          src={image || "/assets/images/appointment-img.png"}
          alt={name}
          width={500}
          height={300}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Link href={`/projects/${slug}`}>
          <Button className="mt-4 bg-green-500 hover:bg-green-600">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
