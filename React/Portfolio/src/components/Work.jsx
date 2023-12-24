import AWS from "../assets/aws.png";
function Work() {
  const Projects = [
    {
      id: 1,
      shadow: "shadow-[#040C16]",
      title: "React JS Application",
      DemoLink: "/",
      CodeLink: "/",
      image: `url(${AWS})`,
    },
    {
      id: 2,
      shadow: "shadow-[#040C16]",
      title: "React JS Application 2",
      DemoLink: "/",
      CodeLink: "/",
      image: `url(${AWS})`,
    },
  ];
  return (
    <div className="w-full md:h-screen bg-[#0a192f] text-gray-300" name="work">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* To-Do change the code so that it get data for an Online backend */}
          {Projects.map(({ id, shadow, title, DemoLink, CodeLink, image }) => (
            <div
              key={id}
              style={{ backgroundImage: image }}
              className={`shadow-lg group container rounded-md text-center flex justify-center items-center mx-auto content-div ${shadow}`}
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {title}
                </span>
                <div className="pt-8 text-center">
                  <a href={DemoLink}>
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Demo
                    </button>
                  </a>
                  <a href={CodeLink}>
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Grid Item */}
          {/* To-Do change the code so that it get data for an Online backend */}
          {/* To-Do add a loop to prevent code repetition */}
        </div>
      </div>
    </div>
  );
}

export default Work;
