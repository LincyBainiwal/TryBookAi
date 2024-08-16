import React from "react";
const roadmapData = [
  {
    title: "Advanced Character Development",
    description: "AI-powered tool for creating deep, complex characters.",
    icon: "👤",
  },
  {
    title: "Collaborative Writing",
    description: "Co-create stories with other authors or AI assistants.",
    icon: "👥",
  },
  {
    title: "E-book Platform Integration",
    description: "Seamless publishing to popular e-book platforms.",
    icon: "🏬",
  },
  {
    title: "AI Cover Art Generation",
    description: "Create stunning book covers with AI-generated art.",
    icon: "🎨",
  },
];

const Roadmap = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full  text-white py-12">
      <h1 className="text-3xl font-bold mb-8">Roadmap</h1>
      <div className="relative w-3/4 lg:w-1/2">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1  h-full"></div>
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-8 opacity-0 transform transition-opacity duration-700 delay-150 animate-fade-in"
            style={{ animationDelay: `${index * 300}ms` }}
          >
            <div className="flex flex-col items-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="flex-grow border-l-4 border-blue-500"></div>
            </div>
            <div className="ml-8">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
