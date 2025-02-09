"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";

import { Slider1, Slider2 } from "../public/index";

const slides = [
  {
    src: Slider1,
    title: "IT'S BACK FOR A LIMITED TIME:",
    highlight: "HOT PINK.",
    button: "SHOP NOW",
  },
  {
    src: Slider2,
    title: "THE BEST CASE FOR YOUR PHONE",
    highlight: "ULTRA MAGNETIC.",
    button: "DISCOVER",
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Slide Background */}
        <motion.div
          key={index}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl"
          exit={{ opacity: 0, scale: 1.05 }}
          initial={{ opacity: 0, scale: 1.05 }}
          style={{
            backgroundImage: `url(${slides[index].src})`,
          }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Conteúdo Sobreposto */}
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-center text-center lg:text-left text-black p-6 lg:p-16 dark:text-white">
        <h2 className="text-lg lg:text-xl font-bold">{slides[index].title}</h2>
        <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
          {slides[index].highlight}
        </h1>
        <Button className="bg-green-600 text-white font-medium border-white border-x-small border-y-small dark:border-black">
          {slides[index].button}
        </Button>
      </div>
    </div>
  );
}
