"use client";
import { motion } from "framer-motion";

// components
import Image from "next/image"
import Container from "../components/Container"
import GlowWrapper from "../components/GlowWrapper"
import Socials from "../components/Socials"
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 items-center min-h-screen">

        <div className="col-span-2">

          <div className="space-y-10 flex flex-col justify-center h-full">
            <span className="block text-xl text-indigo-600 font-semibold uppercase">welcome to my world</span>
            <p className="text-5xl font-bold capitalize">
              I'm Paraphol Puangpee<br />
              web{" "}
              <TypeAnimation
                sequence={[
                  "Designer", 2000,
                  "Developer", 2000,
                  "UI/UX Enthusiast", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-600"
              />
            </p>

            <h1 className="text-xl text-white/50 max-w-[470px]">
            A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as
            </h1>

            <div>
              <p className="text-xl mb-5">Find me on</p>
              <Socials/>
            </div>

          </div>

        </div>

        
        <div className="col-span-2 flex justify-end">
          <GlowWrapper type="image">
            <div className="w-[500px] h-[650px]">
              <Image
                src="/accest/avatar.jpg"
                alt="personal"
                fill
                className="object-cover border-25 border-neutral-900 rounded-2xl"
              />
            </div>
          </GlowWrapper>
        </div>


      </div>
    </Container>
  )
}
export default Hero