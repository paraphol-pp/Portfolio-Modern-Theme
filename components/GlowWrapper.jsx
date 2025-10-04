"use client"
import { useState } from "react";

const GlowWrapper = ({ children, type = "card"}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const mouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div onMouseMove={mouseMove}
     className="relative rounded-2xl p-[2px] group">
      <div 
        className="absolute inset-0 opacity-0 rounded-2xl group-hover:opacity-100 transition duration-400 p-[2.5px]"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px ,oklch(51.1% 0.262 276.966) , transparent 50%)`
        }}
      >
        <div classame="w-full h-full rounded-2xl bg-neutral-900"></div>
      </div>

      <div
        className={
          type === "card"
          ? "relative rounded-2xl bg-neutral-900 p-10"
          : "relative rounded-2xl overflow-hidden w-full h-full"
        }
      >
        {children}
      </div>

    </div>
  );
};
export default GlowWrapper;