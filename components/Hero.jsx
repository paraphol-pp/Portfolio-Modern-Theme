// components
import Image from "next/image"
import Container from "../components/Container"
import GlowWrapper from "../components/GlowWrapper"
import Socials from "../components/Socials"


const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 items-center min-h-screen">

        <div className="col-span-2">

          <div className="space-y-10 flex flex-col justify-center h-full">
            <span className="block text-xl text-indigo-600 font-semibold uppercase">welcome to my world</span>
            <h1 className="text-6xl  font-bold capitalize">I'm Paraphol Puangpee<br />web <span className="text-indigo-600">Designer</span></h1>
            <p className="text-xl text-white/50 max-w-[470px]">A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as</p>

            <div>
              <h2 className="text-xl ">Find me on</h2>
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