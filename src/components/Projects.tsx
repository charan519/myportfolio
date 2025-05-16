import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Geo Guide",
    category: "AI/ML Development",
    imageUrl: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg",
    year: "2024",
    link: "https://geoguideai.netlify.app",
  },
  {
    id: 2,
    title: "Hackathon Platform",
    category: "Web Development",
    imageUrl: "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg",
    year: "2023",
    link: "https://thecodingclubx.in",
  },
  {
    id: 3,
    title: "Mind Mate",
    category: "Winner Project",
    imageUrl: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
    year: "2023",
    link: "https://celebrated-belekoy-83c32b.netlify.app",
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        projectsRef.current?.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.4'
      );
    }
  }, [inView]);

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 bg-black text-white"
    >
      <div className="container-fluid mx-auto px-4">
        <div className="mb-16">
          <p
            ref={titleRef}
            className="text-xl md:text-lg font-medium leading-relaxed text-white/60"
          >
            SELECTED PROJECTS
          </p>
        </div>

        <div
          ref={projectsRef}
          className="space-y-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;