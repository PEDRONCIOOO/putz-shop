"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  category: string;
  image: string;
}

export default function ProductCategories() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto text-center mt-8">
      {/* Section Title */}
      <h2 className="text-xl font-semibold uppercase">MAGNETIC AF</h2>
      <h1 className="text-5xl font-extrabold uppercase mt-1">MOUNTS</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-black dark:border-white rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <Image
              alt={product.name}
              className="w-full h-auto object-cover"
              height={300}
              src={product.image}
              width={300}
            />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2 text-lg font-semibold">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through mr-2">
                    {product.oldPrice}
                  </span>
                )}
                <span>{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
