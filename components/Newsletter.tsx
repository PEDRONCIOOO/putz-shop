"use client";

import React from "react";
import Image from "next/image";

import { NewsletterBannner } from "@/public";

export default function Newsletter() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden mt-8  shadow-white shadow-large rounded-2xl">
      {/* Background Image */}
      <Image
        alt="Newsletter Banner"
        className="absolute inset-0 w-full h-full rounded-2xl"
        layout="fill"
        objectFit="cover"
        src={NewsletterBannner}
      />

      {/* Overlay (Darken the image for better readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
          TUNE IN.
        </h1>
        <p className="mt-2 text-lg md:text-xl font-semibold">
          Sales, love letters, new releases, and more &lt;3
        </p>

        {/* Newsletter Input */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <input
            className="w-64 md:w-80 px-4 py-3 rounded-md text-black outline-none"
            placeholder="Your email here"
            type="email"
          />
          <button className="px-5 py-3 bg-green-500 text-black font-bold rounded-md hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
