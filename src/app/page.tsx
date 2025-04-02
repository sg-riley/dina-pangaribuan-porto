"use client";
import React from "react";

export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div>
      <div className="min-h-screen  flex flex-col items-center justify-center relative w-full font-[family-name:var(--font-plus-jakarta-sans)]">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-blue-950 via-white to-white flex items-center gap-2 md:gap-8">
          <span>Shooting Star</span>
          <span className="text-white text-lg font-thin">x</span>
          <span>Star Background</span>
        </h2>
      </div>
      <h2 className="my-48">.</h2>
    </div>
  );
}
