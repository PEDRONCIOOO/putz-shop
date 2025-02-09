"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { GuyPhone } from "@/public/index"; // Ensure this points to the correct SVG

export default function RollingTextBanner() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Infinite Scrolling Text */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }} // Moves by half its width
        className="absolute top-10 flex whitespace-nowrap font-extrabold text-purple-400 uppercase text-8xl opacity-50"
        style={{ whiteSpace: "nowrap" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Slower movement
      >
        PHONE ACCESSORIES THAT DONT SUCK. &nbsp; PHONE ACCESSORIES THAT DONT
        SUCK. &nbsp; PHONE ACCESSORIES THAT DONT SUCK. &nbsp; PHONE ACCESSORIES
        THAT DONT SUCK.
      </motion.div>

      {/* Centered SVG Image */}
      <div className="absolute flex items-center justify-center">
        <Image
          alt="Character"
          className="mt-16"
          height={500}
          src={GuyPhone}
          width={600}
        />
      </div>
    </div>
  );
}
