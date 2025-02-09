"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group border-2 border-black dark:border-white rounded-xl overflow-hidden"
          >
            {/* Imagem com altura fixa no mobile (425px) */}
            <div className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] xl:h-[300px] relative">
              <Image
                alt={category.name}
                className="transition-transform duration-300 group-hover:scale-105"
                layout="fill" // 🔥 Isso faz a imagem preencher o container corretamente
                objectFit="cover" // 🔥 Mantém a proporção sem cortar errado
                src={category.image}
              />
            </div>

            {/* Texto centralizado sobre a imagem */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
