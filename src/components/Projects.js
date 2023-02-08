import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "techAlpah E-commerce website",
    img: "https://res.cloudinary.com/dyagump46/image/upload/v1675840930/protfolio/TechAlpha_covnxh.png",
    img1: "https://res.cloudinary.com/dyagump46/image/upload/v1675840931/protfolio/TechAlpha2_xesips.png",
    descripton:
      "A robust and dynamic e-commerce platform created with ReactJS, offering users a seamless shopping experience with fast and efficient navigation. The project boasts a clean and modern design, as well as a powerful infrastructure capable of handling high traffic and large volumes of transactions. With ReactJS, the platform provides a responsive and intuitive interface for browsing products, adding items to the cart, and checking out with ease.",
    tools: ["React.Js", "react-redux", "react-toastify"],
    liveLink: "https://warm-kataifi-366884.netlify.app/",
    fontEnd: "https://github.com/hasnainhawlader/TechAlpha",
  },
  {
    id: 2,
    title: "First Bank Bank Application ",
    img: "https://res.cloudinary.com/dyagump46/image/upload/v1675840902/protfolio/bank1_px390n.png",
    img1: "https://res.cloudinary.com/dyagump46/image/upload/v1675840916/protfolio/bank2_ogb1cq.png",
    descripton:
      "A comprehensive bank application built using JavaScript, providing users with a seamless and efficient way to manage their financial transactions and information. The project features a user-friendly interface, secure data storage, and a variety of functionalities including account management, money transfers, and bill payments. Whether on desktop or mobile, users can expect a smooth and reliable experience, all powered by the versatility of JavaScript.",
    tools: ["Javascript", "HTML", "CSS"],
    liveLink: "https://hasnainhawlader.github.io/First-Bank/",
    fontEnd: "https://github.com/hasnainhawlader/First-Bank",
  },
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"Projects"} />

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
