import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
function Skills() {
  const skills = [
    {
      id: 1,
      title: "HTML",
      img: HTML,
      shadow: "hover:shadow-[#e34c26]",
      alt: "HTML icon",
    },
    {
      id: 2,
      title: "CSS",
      img: CSS,
      shadow: "hover:shadow-[#264de4]",
      alt: "CSS icon",
    },
    {
      id: 3,
      title: "JavaScript",
      img: JavaScript,
      shadow: "hover:shadow-[#f0db4f]",
      alt: "JAVASCRIPT icon",
    },
    {
      id: 4,
      title: "REACT",
      img: ReactImg,
      shadow: "hover:shadow-[#7cc5d9]",
      alt: "REACT icon",
    },
    {
      id: 5,
      title: "NODE JS",
      img: Node,
      shadow: "hover:shadow-[#68a063]",
      alt: "NODE JS icon",
    },
    {
      id: 6,
      title: "MONGO DB",
      img: Mongo,
      shadow: "hover:shadow-[#4db33d]",
      alt: "MONGO DB icon",
    },
    {
      id: 7,
      title: "Tailwind",
      img: Tailwind,
      shadow: "hover:shadow-[#b8c2cc]",
      alt: "Tailwind icon",
    },
    {
      id: 8,
      title: "FIREBASE",
      img: FireBase,
      shadow: "hover:shadow-[#F57C00]",
      alt: "FIREBASE icon",
    },
    {
      id: 9,
      title: "GITHUB",
      img: GitHub,
      shadow: "hover:shadow-[#fafbfc]",
      alt: "GITHUB icon",
    },
  ];
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I&rsquo;ve worked with
          </p>
        </div>
        {/* To-Do change the code so that it get data for an Online backend */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          {skills.map(({ id, title, img, shadow, alt }) => (
            <div
              className={`shadow-md hover:scale-110 duration-300 ${shadow}`}
              key={id}
            >
              <img className="w-20 mx-auto" src={img} alt={alt} />
              <p className="my-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
