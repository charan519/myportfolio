import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.link}
      className="group block relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative py-8 border-t border-secondary/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h3>
            {/* Updated category text color for better brightness */}
            <p className="text-white/70">{project.category}</p>
          </div>

          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary text-background transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 w-full h-full bg-white/5 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </div>
    </a>
  );
};

export default ProjectCard;
