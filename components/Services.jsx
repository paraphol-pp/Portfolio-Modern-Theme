"use client";
import { FaCode, FaPrint, FaHandshake } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import Container from "../components/Container";
import GlowWrapper from "../components/GlowWrapper";

const Services = () => {
  return (
    <Container>
      <div className="text-center space-y-5">
        <p className="text-xl font-semibold text-indigo-600">WHAT I DO</p>
        <h1 className="text-5xl font-bold">What I Provide For You</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">
        
        <GlowWrapper>
          <div className="flex items-center space-x-5">
            <p className="bg-indigo-600 p-3 rounded-full text-xl">
              <FaCode />
            </p>
            <h1 className="text-xl font-semibold">Ui/Ux Design</h1>
          </div>

          <p className="max-w-[600px] mt-5 text-md  text-white/50">
            Each one showcases my approach and dedication to detail, creativity
            Each one showcases my approach and dedication to detail, creativity
          </p>
        </GlowWrapper>
        
        <GlowWrapper>
          <div className="flex items-center space-x-5">
            <p className="bg-indigo-600 p-3 rounded-full text-xl">
              <IoMdColorPalette />
            </p>
            <h1 className="text-xl font-semibold">Web Development</h1>
          </div>

          <p className="max-w-[600px] mt-5 text-md  text-white/50">
            Each one showcases my approach and dedication to detail, creativity
            Each one showcases my approach and dedication to detail, creativity
          </p>
        </GlowWrapper>
        
        <GlowWrapper>
          <div className="flex items-center space-x-5">
            <p className="bg-indigo-600 p-3 rounded-full text-xl">
              <FaPrint />
            </p>
            <h1 className="text-xl font-semibold">Business Solutions</h1>
          </div>

          <p className="max-w-[600px] mt-5 text-md  text-white/50">
            Each one showcases my approach and dedication to detail, creativity
            Each one showcases my approach and dedication to detail, creativity
          </p>
        </GlowWrapper>
        
        <GlowWrapper>
          <div className="flex items-center space-x-5">
            <p className="bg-indigo-600 p-3 rounded-full text-xl">
              <FaHandshake />
            </p>
            <h1 className="text-xl font-semibold">Profit Partners</h1>
          </div>

          <p className="max-w-[600px] mt-5 text-md  text-white/50">
            Each one showcases my approach and dedication to detail, creativity
            Each one showcases my approach and dedication to detail, creativity
          </p>
        </GlowWrapper>

      </div>
    </Container>
  );
};

export default Services;
