"use client";

import { Sidebar } from "@/components/sidebar";
import { ProjectCard } from "@/components/project-card";

export default function TagListDashboard() {
  const projects = [
    {
      id: 1,
      name: "Project Name",
      subtitle: "CARD SUBTITLE",
      details: "Project Details Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      name: "Project Name",
      subtitle: "CARD SUBTITLE",
      details: "Project Details Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      name: "Project Name",
      subtitle: "CARD SUBTITLE",
      details: "Project Details Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      name: "Project Name",
      subtitle: "CARD SUBTITLE",
      details: "Project Details Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      name: "Project Name",
      subtitle: "CARD SUBTITLE",
      details: "Project Details Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      name: "Project Name",
      subtitle: "CARD SUBTITLE",
      details: "Project Details Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Master Tag List</h1>
            <p className="text-sm text-muted-foreground">Search Filters</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}