import { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/dyagump46/image/upload/v1675863434/protfolio/1300x300_mfhj6n.png",
  img2: "https://res.cloudinary.com/dyagump46/image/upload/v1675863434/protfolio/1300x300_mfhj6n.png",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(abouts);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am Hasnain Ahmed is a talented frontend developer with expertise
            in ReactJs. I have a passion for building user-friendly and dynamic
            web applications using the latest frontend technologies. With a
            strong understanding of ReactJs and its components, I have the
            ability to bring concepts to life and create engaging user
            experiences.
          </p>
          <p className="mt-10">
            In addition to my expertise in the fontend developer, I also have a
            strong background in UI design and animation. I am skilled in using
            the GreenSock Animation Platform (GSAP) library to create dynamic
            and engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
          </p>
          <a
            href="https://drive.google.com/file/d/1t7tPYm4RxnJuX3_TYZFKmRXgt4pHUdt2/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
