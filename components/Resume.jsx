"use client"
import Image from "next/image";
import Container from "./Container";

const Resume = () => {
  
  const iconSkill = [
    {
      id: 1,
      title: "Figma",
      description:
        "The personal portfolio category includes website or physical assets that tell your story.",
      icon: "/accest/icon/figma-icon.png",
    },
    {
      id: 2,
      title: "HTML & CSS",
      description:
        "I specialize in crafting semantic, accessible, and responsive frontends.",
      icon: "/accest/icon/html-icon.png",
    },
    {
      id: 3,
      title: "React.js",
      description:
        "Building modern web interfaces with reusable components and performance in mind.",
      icon: "/accest/icon/react-icon.png",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      description:
        "Designing beautiful UIs efficiently with utility-first Tailwind classes.",
      icon: "/accest/icon/tailwind-icon.png",
    },
  ]

  return (
    <div className="bg-neutral-900 mx-40 my-40 py-20 rounded-3xl h-full">
      <Container>
        <div className="grid grid-cols-2 bg-neutral-900 gap-8">
          <div className="space-y-5">
            <p className="text-xl font-semibold text-indigo-600">MY SKILL</p>
            <h1 className="text-5xl font-bold">
              My Experts Areas Where I Gained Skill
            </h1>
            <p className="text-white/50 ">
              usiness consulting consultants provide expert advice and guida
              busi nesses to help them improve their performance, efficiency,
              and organ izational Business consulting consultants provide
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {iconSkill.map((skill) => (
              <div key={skill.id}
                   className="border-2 border-white/10 rounded-3xl px-8 py-10 space-y-5">     
                   <div className="border-2 border-white/10 rounded-full h-fit w-fit p-5">
                      <Image
                        src={skill.icon}
                        alt=""
                        width={25}
                        height={25}
                        className="object-coverrounded-full"
                      />
                   </div>
                   <h1 className="text-2xl font-bold">{skill.title}</h1>
                   <p className="text-white/50">{skill.description}</p>
              </div>
            ))}
    
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Resume;
