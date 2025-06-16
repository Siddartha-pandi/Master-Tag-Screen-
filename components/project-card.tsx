"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    subtitle: string;
    details: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <p className="text-xs text-muted-foreground">{project.subtitle}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{project.details}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" className="text-xs px-3 py-1 h-auto" size="sm">
          Open
          <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}