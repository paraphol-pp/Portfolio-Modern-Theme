"use client";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Socials from "../components/Socials";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);

      // ตรวจจับ section ที่อยู่ในหน้าจอ
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Resume",
    "Pricing",
    "Blog",
    "Contact",
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isTop ? "bg-transparent" : "bg-neutral-900/80 backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="py-5">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/187/187879.png"
                alt="logo"
                className="h-10 w-10 object-cover"
              />
              <h1 className="text-4xl text-white font-extrabold">Paraphol</h1>
            </div>

            {/* menu */}
            <div className="space-x-5">
              {menuItems.map((name) => {
                const lower = name.toLowerCase();
                const isActive = activeSection === lower;

                return (
                  <a
                    key={name}
                    href={`#${lower}`}
                    className={`h1 font-semibold px-3 py-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "text-indigo-600 bg-indigo-700/20"
                        : "text-white hover:text-indigo-600 hover:bg-indigo-700/10"
                    }`}
                  >
                    {name}
                  </a>
                );
              })}
            </div>

            <Socials />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
