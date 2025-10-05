import Image from "next/image";
import Container from "./Container";
import GlowWrapper from "./GlowWrapper";
import { FaRegUser, FaRegComments } from "react-icons/fa";

const Blog = () => {
  const details = [
    {
      id: 1,
      date: "12 Feb",
      title: "Inspiring the World, One Project at a Time for the Woman",
      author: "Mesbah",
      comments: "Comments (05)",
      image: "/accest/blog-img-1.avif",
    },
    {
      id: 2,
      date: "12 Feb",
      title: "Let's bring your ideas to natural! Contact me, and let's create!",
      author: "Mesbah",
      comments: "Comments (05)",
      image: "/accest/blog-img-2.avif",
    },
    {
      id: 3,
      date: "12 Feb",
      title: "Each one showcases my approach and dedication to detail",
      author: "Mesbah",
      comments: "Comments (05)",
      image: "/accest/blog-img-3.avif",
    },
  ];

  return (
    <Container>
      {/* header */}
      <div className="space-y-5 text-center mt-40 mb-20">
        <p className="text-xl font-semibold text-indigo-600 uppercase">
          Latest Blog
        </p>
        <h1 className="text-5xl font-bold">
          Transforming Ideas into Exceptional
          <br />
          the man can Creations
        </h1>
      </div>

      {/* content */}
      <div className="grid grid-cols-3 gap-8">
        {details.map((item) => (
          <GlowWrapper key={item.id} type="card" noPadding>
            <div className="bg-neutral-900 rounded-2xl overflow-hidden group cursor-pointer transition duration-500">
              {/* image */}
              <div className="relative w-full h-[300px] overflow-hidden rounded-b-3xl shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500 "
                />
                <div className="h1 absolute top-0 left-0 bg-neutral-900/60 text-white text-sm font-semibold px-4 py-2 rounded-br-md">
                  {item.date}
                </div>
              </div>

              {/* content */}
              <div className="p-7 space-y-4">
                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <div className="flex items-center gap-1">
                    <FaRegUser /> {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegComments /> {item.comments}
                  </div>
                </div>

                <h2 className="text-2xl font-bold leading-snug group-hover:text-indigo-600 transition duration-300">
                  {item.title}
                </h2>

                <button className="border border-white/10 rounded-full px-6 py-2 text-white/70 hover:bg-indigo-600 hover:text-white transition duration-300">
                  Read More →
                </button>
              </div>
            </div>
          </GlowWrapper>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
