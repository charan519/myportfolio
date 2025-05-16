import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const currentPositionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      ).fromTo(
        currentPositionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
    }
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-black text-white py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/3">
            <h2
              ref={titleRef}
              className="text-[14vw] md:text-[10vw] xl:text-[6vw] font-black mb-6 leading-none"
            >
              /ABOUT
            </h2>
          </div>

          <div className="w-full lg:w-2/3">
            <p
              ref={textRef}
              className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-3xl"
            >
              I’m a passionate third-year B.Tech student at Mohan Babu University, specializing in Artificial Intelligence and Machine Learning. As a core member of my university's Coding Club, I actively take part in organizing technical events and contributing to collaborative learning.
              <br /><br />
              I’ve had the opportunity to win a national-level hackathon at VR Siddhartha, which was a defining moment in my journey as a developer. I also led the organization of a hackathon at my university, where I built a dedicated hackathon platform website from scratch.
              <br /><br />
              One of the projects I'm most proud of is <strong>"AI Geo Guide"</strong>, an AI-powered solution designed during a hackathon to solve real-world navigation challenges. With a strong foundation in Java, Python, web development, and AI/ML technologies, I’m constantly looking for new ways to create, build, and innovate.
            </p>

            <div
              ref={currentPositionRef}
              className="p-6 border border-white/20 rounded-lg inline-block bg-white/5 backdrop-blur-md"
            >
              <p className="text-sm md:text-base text-white/60">CURRENTLY STUDYING AT</p>
              <p className="text-lg md:text-xl font-medium">Mohan Babu University (CGPA: 8.59)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/3 hidden md:block">
        <div className="w-24 h-24 border-l-2 border-b-2 border-secondary/30 transform rotate-45"></div>
      </div>
    </section>
  );
};

export default About;
