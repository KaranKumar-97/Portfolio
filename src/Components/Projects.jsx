import React,{useEffect,useRef} from "react";
import ProjectCard from "./ProjectCard";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const textRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
          textRef.current,
          { xPercent: -100 },
          {
            xPercent: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 180%", // Adjust this value as needed
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, []);
  const projects = [
    {
      image: "gigverse.png",
      title: "Gigverse",
      desc: "GigVerse connects skilled freelancers with clients seeking top-notch services, offering a seamless platform for freelancers to showcase their talents and clients to find experts.",
      link: "https://gig-verse.vercel.app/",
      github: "https://github.com/KaranKumar-97/gigverse",
      skills: [{title:"React",img:"react.png"},{title:"Zustand",img:"zustand.svg"},{title:"Tailwind CSS",img:"tailwind.svg"},{title:"MUI",img:"mui.png"},{title:"Node.js",img:"node.png"},{title:"Express.js",img:"express.jpg"},{title:"MongoDB",img:"mongo.png"}],
    },
    {
      image: "swiftshop.png",
      title: "SwiftShop",
      desc: "Developed e-commerce web app using React, Redux Toolkit, and Tailwind CSS, featuring dynamic product display, efficient cart management, and seamless state handling with API integration.",
      link: "https://react-swift-shop.vercel.app/",
      github: "https://github.com/KaranKumar-97/SwiftShop",
      skills: [{title:"React",img:"react.png"},{title:"Redux",img:"redux.png"},{title:"Tailwind CSS",img:"tailwind.svg"}],
    },
    {
      image: "weather.png",
      title: "Weather Web App",
      desc: "A Weather Web App using HTML, CSS, and JavaScript with OpenWeatherMap API for real-time weather updates. It shows weather for current location and any city.",
      liveLink: "https://karankumar-97.github.io/Weather-App/",
      githubLink: "https://github.com/KaranKumar-97/Weather-App",
      skills: [{title:"HTML",img:"html.png"},{title:"CSS",img:"css.png"},{title:"JavaScript",img:"js.png"}],
    },
  ];
  return (
    <div className="w-[92%] mx-auto mt-20" id="projects">
      <p ref={textRef} className="uppercase text-3xl md:text-6xl text-center md:text-left font-bold">
        Personal <span className="text-[#CBACF9]">Projects</span>{" "}
      </p>
      <div className="flex flex-wrap gap-10 mt-10 justify-center" data-aos="fade-up">
        {projects.map((project) => (
          <Tilt options={{ max: 15,scale:1}}>
            <ProjectCard
              title={project.title}
              desc={project.desc}
              image={project.image}
              github={project.github}
              link={project.link}
              skills={project.skills}
            />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
