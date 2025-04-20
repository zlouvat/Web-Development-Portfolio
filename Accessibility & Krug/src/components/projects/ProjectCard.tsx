import React, { useState } from "react";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-batesGray-light transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick && onClick(project)}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-garnet-dark/80 to-transparent z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-80" : "opacity-60"
          }`}
        />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        <div className="absolute bottom-3 left-3 z-20">
          <div className="text-xs text-white bg-garnet px-2 py-1 rounded-sm font-medium inline-block">
            {project.category}
          </div>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-garnet-dark mb-2 font-serif">
          {project.title}
        </h3>
        <p className="text-batesGray mb-4 flex-grow text-sm">
          {project.description.length > 120
            ? `${project.description.substring(0, 120)}...`
            : project.description}
        </p>
        <div className="mt-2">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded-full bg-batesBlue-light/20 text-batesBlue-dark font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-batesGray-light text-batesGray font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          <button
            className={`w-full mt-1 flex items-center justify-center text-white bg-garnet hover:bg-garnet-bright transition-colors text-sm font-medium py-2 px-4 rounded ${
              isHovered ? "bg-garnet-bright" : "bg-garnet"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onClick && onClick(project);
            }}
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
