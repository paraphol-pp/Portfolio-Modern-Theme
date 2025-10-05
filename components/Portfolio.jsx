"use client"
import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "branding", "design", "content writing", "marketing"];

  const project = [
    {
      id: 1,
      title: "website concert design",
      tool: ["HTML", "Tailwind", "JavaScript"],
      image: "/accest/work/thumb4.png",
      category: "design",
    },
    {
      id: 2,
      title: "website concert design",
      tool: ["HTML", "Tailwind", "JavaScript"],
      image: "/accest/work/thumb2.png",
      category: "branding",
    },
    {
      id: 3,
      title: "website concert design",
      tool: ["HTML", "Tailwind", "JavaScript"],
      image: "/accest/work/thumb1.png",
      category: "marketing",
    },
    {
      id: 4,
      title: "website concert design",
      tool: ["HTML", "Tailwind", "JavaScript"],
      image: "/accest/work/thumb3.png",
      category: "content writing",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? project
      : project.filter((p) => p.category === activeCategory);

  return (
    <Container>
      {/* header */}
      <div className="space-y-5 text-center">
        <p className="text-xl font-semibold text-indigo-600 uppercase">
          Latest Portfolio
        </p>
        <h1 className="text-5xl font-bold">
          Transforming Ideas into Exceptional
        </h1>
        <p className="text-white/50">
          Business consulting consultants provide expert advice and guida
          businesses to help <br />
          them improve their performance, efficiency, and organizational
        </p>
      </div>

      {/* categories */}
      <div className="flex justify-center my-20 gap-5 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm font-semibold capitalize px-6 py-2 rounded-full transition duration-400 cursor-pointer ${
              activeCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-neutral-900 text-white hover:bg-indigo-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* projects */}
      <div className="grid grid-cols-2 gap-8">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-900/80 p-10 rounded-3xl shadow-xl"
          >
            <div>
              <Image
                src={item.image}
                alt=""
                width={700}
                height={700}
                className="object-cover cursor-pointer rounded-2xl"
              />
            </div>
            <div className="space-y-3 mt-5">
              <h1 className="text-4xl font-bold capitalize hover:text-indigo-600 transition duration-400 cursor-pointer">
                {item.title}
              </h1>

              <div className="flex justify-between items-center flex-wrap">
                <div className="flex gap-3">
                  {item.tool.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 border border-white/10 rounded-full text-sm text-white/50 hover:bg-indigo-600 hover:text-white transition duration-400 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-lg font-semibold w-fit capitalize text-white/50 border border-white/10 rounded-full px-7 py-2 hover:bg-indigo-600 hover:text-white transition duration-400 cursor-pointer">
                  view details →
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* blob */}
        <div className="absolute bg-indigo-600 h-150 w-150 rounded-full z-[-1] right-40 blur-3xl opacity-15"></div>
        <div className="absolute bg-indigo-600 h-150 w-150 rounded-full z-[-1] left-40 blur-3xl opacity-10 my-150"></div>
      </div>
    </Container>
  );
};

export default Portfolio;


{/* blob */}
                