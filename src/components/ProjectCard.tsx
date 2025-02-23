import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-200 mb-4">{project.description}</p>
          <div className="flex space-x-3">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs px-3 py-1 bg-white/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm hover:underline"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;