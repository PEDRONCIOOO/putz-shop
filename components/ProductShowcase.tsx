"use client";

import { useState } from "react";
import Image from "next/image";

import { ProductShowcase1 } from "@/public";

// Sample product variations with colors and corresponding images
const productVariations = [
  { color: "Midnight Blue", hex: "#353D75", image: ProductShowcase1 },
  { color: "Forest Green", hex: "#2D4024", image: ProductShowcase1 },
  { color: "Burgundy", hex: "#592D2A", image: ProductShowcase1 },
  { color: "Sky Blue", hex: "#7CE8E2", image: ProductShowcase1 },
  { color: "Black", hex: "#000000", image: ProductShowcase1 },
  { color: "Cream", hex: "#EFE5C3", image: ProductShowcase1 },
  { color: "Silver", hex: "#D8D9DA", image: ProductShowcase1 },
];

export default function ProductShowcase() {
  const [selectedColor, setSelectedColor] = useState(productVariations[0]);

  return (
    <div className="w-full max-w-5xl mx-auto border-2 border-black dark:border-white grid grid-cols-1 md:grid-cols-2 rounded-2xl">
      {/* Left Side - Product Details */}
      <div className="p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold uppercase dark:text-white">
          GRIP + CASE KIT.
        </h1>
        <p className="mt-2 bg-purple-200 text-purple-800 px-3 py-1 rounded-md text-sm dark:bg-purple-900 dark:text-purple-200">
          Functional Grip + Sleek Case for iPhone
        </p>
        <span className="p-1 font-medium text-base dark:text-gray-300">
          Our bestselling Snap Grip combined with Snap Case. Made with premium
          soft-touch plastic, comes with 2 sleek aluminum camera covers, plus a
          matching aluminum button kit. Grip. Kickstand. Magnetic. Fully
          MagSafe® compatible with wireless charge-thru.
        </span>

        {/* Color Options */}
        <div className="mt-4 flex gap-3 items-center">
          {productVariations.map((variation, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor.color === variation.color
                  ? "border-green-500 scale-105"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              style={{ backgroundColor: variation.hex }}
              onClick={() => setSelectedColor(variation)}
            />
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md uppercase font-bold hover:bg-gray-900 transition dark:hover:bg-gray-100 dark:hover:text-black">
          iPhone 15 & 16 Series
        </button>
      </div>

      {/* Right Side - Product Image */}
      <div className="flex items-center justify-center border-l-2 border-black dark:border-white bg-transparent">
        <Image
          alt={selectedColor.color}
          className="object-contain w-full h-full rounded-r-xl"
          height={500}
          src={selectedColor.image}
          width={400}
        />
      </div>
    </div>
  );
}
