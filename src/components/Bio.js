import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        As a skilled and experienced ReactJS developer, I have a proven track
        record of delivering outstanding results in the field of software
        development. With a strong foundation in programming languages such as
        C, C++, Java, and Python, I have the ability to tackle complex projects
        with ease and efficiency. Their deep understanding of ReactJS and
        programming concepts, combined with their passion for technology, make
        them a valuable asset to any team. I have a natural talent for
        problem-solving and a drive to continuously improve their skills, making
        them a sought-after professional in the industry.
      </p>
    </div>
  );
};

export default Bio;
