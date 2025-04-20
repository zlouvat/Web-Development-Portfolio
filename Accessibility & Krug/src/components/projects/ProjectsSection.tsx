import React, { useState } from "react";
import { Project, ProjectCategory } from "../../types/project";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "all",
    "python",
    "javascript",
    "csharp",
    "java",
    "other",
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => {
          // Filter projects based on programming languages
          const techList = project.technologies.map((tech) =>
            tech.toLowerCase()
          );

          if (selectedCategory === "python") {
            return techList.some(
              (tech) =>
                tech.includes("python") ||
                tech.includes("tensorflow") ||
                tech.includes("keras") ||
                tech.includes("pytorch") ||
                tech.includes("numpy") ||
                tech.includes("pandas") ||
                tech.includes("flask") ||
                tech.includes("django")
            );
          } else if (selectedCategory === "javascript") {
            return techList.some(
              (tech) =>
                tech.includes("javascript") ||
                tech.includes("js") ||
                tech.includes("react") ||
                tech.includes("node") ||
                tech.includes("angular") ||
                tech.includes("vue") ||
                tech.includes("typescript") ||
                tech.includes("d3")
            );
          } else if (selectedCategory === "csharp") {
            return techList.some(
              (tech) =>
                tech.includes("c#") ||
                tech.includes("csharp") ||
                tech.includes("unity") ||
                tech.includes(".net") ||
                tech.includes("xamarin")
            );
          } else if (selectedCategory === "java") {
            return techList.some(
              (tech) =>
                (tech.includes("java") && !tech.includes("javascript")) ||
                tech.includes("spring") ||
                tech.includes("android")
            );
          } else if (selectedCategory === "other") {
            // Everything not matching the above languages
            return !techList.some(
              (tech) =>
                tech.includes("python") ||
                tech.includes("javascript") ||
                tech.includes("js") ||
                tech.includes("react") ||
                tech.includes("node") ||
                tech.includes("c#") ||
                tech.includes("csharp") ||
                tech.includes("unity") ||
                tech.includes("java") ||
                tech.includes("spring")
            );
          }

          return false;
        });

  return (
    <section id="projects" className="py-16 bg-batesGray-light relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-garnet-dark sm:text-4xl">
            Student Projects
          </h2>
          <p className="mt-4 text-lg text-batesGray">
            Explore innovative projects created by Digital and Computational
            Studies students
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition duration-300 ease-in-out m-1
                ${
                  selectedCategory === category
                    ? "bg-garnet text-white"
                    : "bg-white text-garnet hover:bg-garnet-bright hover:text-white"
                }`}
            >
              {category === "csharp"
                ? "C#"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-garnet-dark">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-garnet hover:text-garnet-bright"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-batesGray mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-garnet-bright bg-opacity-20 text-garnet-dark rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-garnet hover:bg-garnet-bright transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
