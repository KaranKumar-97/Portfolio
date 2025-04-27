// Experience.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import MagicButton from "./utils/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Tilt } from "react-tilt";

const Experience = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 180%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  const experienceData = [
    {
      id: 1,
      companyName: "SalesCode.ai",
      shortName: "SalesCode.ai",
      image: "assets/sc logo.svg",
      certificateLink: "https://salescode.ai/",
      positions: [
        {
          role: "Software Engineer",
          duration: "April 2025 - Present",
          responsibilities: [
            "Enhancing and optimizing one of the organization's most critical module - Orders module including cart management, checkout, order validation/placement, and tracking by improving functionalities, refining logic, and developing new features based on client requirements. Ensuring the system remains generic, configurable and scalable for diverse use cases and clients."
          ],
        },
        {
          role: "Software Engineer Trainee",
          duration: "24 September 2024 - March 2025",
          responsibilities: [
            "Engaging in the Software Development Life Cycle (SDLC), including requirement analysis, documentation of functional specifications and technical designs, coding, debugging, and maintenance of assigned tasks.",
            "Developed various UI screens and dynamic, reusable components using React, Material-UI (MUI), and custom hooks for the organization’s portal, client dashboards, and other projects.",
            "Implemented a centralized token refresh mechanism with a subscriber queue to prevent redundant requests and a configurable retry mechanism, reducing API failures by 30% while enhancing efficiency and auth reliability.",
          ],
        },
      ],
    },
    {
      id: 2,
      companyName: "Xeta Analytics Private Limited",
      shortName: "Xeta Analytics Pvt. Ltd.",
      image: "assets/xeta.png",
      certificateLink:
        "https://drive.google.com/file/d/15vY3AFnDyue5x_EcpxoM6jeierFvRulS/view?usp=sharing",
      positions: [
        {
          role: "Frontend Web Development Intern",
          duration: "4 March 2024 - 31 July 2024",
          responsibilities: [
            "Developed CRM & CMS for DietSnap, enabling seamless user interaction and diet assignment by nutritionists.",
            "Enhanced DietSnap’s data visualization with MUI and Apex Charts for easy analysis.",
            "Led frontend development and API integration for FitSnap’s AI-powered workout feedback app.",
            "Deployed FitSnap on AWS EC2, ensuring reliable and accessible service.",
          ],
        },
      ],
    },
    {
      id: 3,
      companyName: "IEEE MSIT",
      shortName: "IEEE MSIT",
      image: "assets/ieee.png",
      certificateLink:
        "https://drive.google.com/file/d/1iXmTQMg_KL0a-tbIH8eUGsb-QyFF-kqu/view?usp=sharing",
      positions: [
        {
          role: "Video Editing Chairperson, Design Committee",
          duration: "December 2022 - January 2024",
          responsibilities: [
            "Led a team of 14 designers to produce captivating posters and videos for IEEE MSIT, leading to a 40% boost in social media engagement.",
            "Mentored team members, equipping them with skills to proficiently utilize Adobe Illustrator and Adobe Premiere Pro.",
          ],
        },
        {
          role: "Design Committee Member",
          duration: "March 2022 - December 2022",
          responsibilities: [
            "Designed and produced high-quality creative posters, videos, posts, and reels to enhance IEEE MSIT's social media presence.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-[92%]  mx-auto mt-20 md:mt-40" id="experience">
      <p
        ref={textRef}
        className="uppercase text-3xl md:text-6xl text-center md:text-left font-bold"
      >
        My <span className="text-[#CBACF9]">Experiences</span>
      </p>

      {experienceData.map((experience) => (
        <div className="mt-5 md:mt-10" data-aos="fade-up" key={experience.id}>
          <Tilt
            options={{ max: 10, scale: 1 }}
            className="flex flex-col md:flex-row gap-10 p-3 bg-gradient-to-br from-[#010320] to-[#111325] rounded-xl border border-gray-600"
          >
            {experience.id === 1 ? (
              <video
                src="assets/sclogo.mp4"
                autoPlay
                loop
                muted
                className="w-96 z-50"
              />
            ) : (
              <img
                src={experience.image}
                alt={experience.companyName}
                className="rounded-lg w-96 object-scale-down"
              />
            )}

            <div>
              <p className="text-2xl md:text-3xl font-bold hidden md:block">
                {experience.companyName}
              </p>
              <p className="text-2xl md:text-3xl font-bold md:hidden block">
                {experience.shortName}
              </p>

              <div className="space-y-5 mt-3">
                {experience.positions.map((position, index) => (
                  <div key={index}>
                    <p className="text-md md:text-lg font-semibold">
                      {position.role}
                    </p>
                    <p className="font-medium text-gray-400 text-xs md:text-sm">
                      {position.duration}
                    </p>
                    <div className="space-y-1 mt-2 text-xs md:text-sm">
                      {position.responsibilities.map((task, idx) => (
                        <p key={idx}>• {task}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-between gap-5 my-5">
                <Link to={experience.certificateLink} target="_blank">
                  <MagicButton
                    title={experience.id === 1 ? "Website" : "Certificate"}
                    w={40}
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default Experience;
