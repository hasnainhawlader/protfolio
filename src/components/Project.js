import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);
  useHoverEffect(projectRightRef, project.img, project.img1);
  return (
    <div className="project grid grid-cols-5 overflow-hidden">
      <div className="project-left col-span-3 flex flex-col gap-10">
        <span className="text-9xl text-white">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p>{project.descripton}</p>
        <span className="text-cyan-400 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className="flex gap-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            className="uppercase py-8 px-14 border border-white/28 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-75"
          >
            Livesite
          </a>
          <a
            href={project.fontEnd}
            target="_blank"
            className="uppercase py-8 px-14 border border-white/28 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-75 cursor-pointer"
          >
            FontEnd
          </a>
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
