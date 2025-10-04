// react-icons
import { GoLock } from "react-icons/go";
import { FaCode, FaPrint, FaHandshake } from "react-icons/fa";

// components
import Container from "./Container";
import GlowWrapper from "./GlowWrapper";

const About = () => {
  return (
    <Container>
      {/* grid */}
      <div className="grid grid-cols-2 gap-8 min-h-screen my-30">

        {/* card-1 */}
        <div className="relative items-center">

          <div className="mx-32 mb-5">
            <div className="bg-neutral/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-amber-50/5 py-25 rounded-3xl">
              <h1 className="text-5xl font-bold flex flex-col justify-center items-center text-center">
                10+
                <p className="max-w-[200px]">Yers OF Experience</p>
              </h1>
            </div>
          </div>

          <div className="mx-30">
            <div className="flex items-center">

              <div className="bg-neutral/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-amber-50/5 py-10 px-12 rounded-3xl">

                <div className="flex items-center">

                  <p className="border-2 border-white/10 text-indigo-600 rounded-full p-5 text-5xl">
                    <GoLock />
                  </p>

                  <div className="ml-6">
                    <h1 className="text-3xl font-bold">Ui/Ux Design</h1>
                    <span>241 Projects</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* blob */}
          <div className="absolute top-50 w-[400px] h-[400px] rounded-full z-[-1] bg-[linear-gradient(to_top,#060606_30%,#4f46e5_100%)] "></div>
        </div>

        {/* card-2 */}
        <div className="space-y-5">
          <p className="text-xl font-semibold text-indigo-600">About Me</p>
          <h1 className="text-5xl font-bold">
            Boost Business Strategic Solutions with Us
          </h1>
          <p className="text-white/50 font-mono">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
          <div className="grid grid-cols-2 gap-8">
            <GlowWrapper>
              <div className="flex items-center space-x-5">
                <p className="bg-indigo-600 p-3 rounded-full text-xl">
                  <FaCode />
                </p>
                <h1 className="text-2xl font-semibold">Ui/Ux Design</h1>
              </div>

              <p className="max-w-[550px] mt-5 text-lg font-medium text-white/50">
                Each one showcases my approach and dedication to detail,
                creativity
              </p>
            </GlowWrapper>

            <GlowWrapper>
              <div className="flex items-center space-x-5">
                <p className="bg-indigo-600 p-3 rounded-full text-xl">
                  <FaCode />
                </p>
                <h1 className="text-2xl font-semibold">Ui/Ux Design</h1>
              </div>

              <p className="max-w-[550px] mt-5 text-lg font-medium text-white/50">
                Each one showcases my approach and dedication to detail,
                creativity
              </p>
            </GlowWrapper>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default About;
