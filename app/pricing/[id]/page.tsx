"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  colors: { color: string; image: string }[];
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImages, setSelectedImages] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    if (!params?.id) {
      router.push("/pricing");

      return;
    }

    const categoryId = Number(params.id);

    if (isNaN(categoryId)) {
      router.push("/pricing");

      return;
    }

    async function fetchProductsByCategory() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?categoryId=${categoryId}`,
        );
        const data: Product[] = await response.json();

        setProducts(data);

        // Definir a imagem inicial de cada produto
        const initialImages = data.reduce(
          (acc, product) => {
            acc[product.id] = product.colors[0].image;

            return acc;
          },
          {} as { [key: number]: string },
        );

        setSelectedImages(initialImages);
      } catch {
      } finally {
        setLoading(false);
      }
    }

    fetchProductsByCategory();
  }, [params?.id, router]);

  const handleColorChange = (productId: number, image: string) => {
    setSelectedImages((prev) => ({ ...prev, [productId]: image }));
  };

  if (loading) {
    return <p className="text-center text-gray-500">Carregando produtos...</p>;
  }

  if (!products.length) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500">
          Nenhum produto encontrado nesta categoria.
        </p>
        <Link href="/pricing">
          <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
            ← Voltar para Categorias
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <Link href="/pricing">
        <button className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
          ← Voltar para Categorias
        </button>
      </Link>

      <h1 className="text-3xl font-bold text-center">
        Produtos da Categoria {params.id}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 rounded-lg dark:bg-black border-white border-x-small border-y-small"
          >
            <Image
              alt={product.name}
              className="w-full h-auto bg-white rounded-2xl"
              height={200}
              src={selectedImages[product.id] || product.colors[0].image}
              width={300}
            />
            <h2 className="text-xl font-semibold mt-2 text-black dark:text-white">
              {product.name}
            </h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">
              ${(product.price / 100).toFixed(2)}
            </p>

            {/* Seletor de cores */}
            <div className="flex gap-2 mt-4 justify-center">
              {product.colors.map((colorOption) => (
                <button
                  key={colorOption.color}
                  className="w-6 h-6 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: colorOption.color,
                    borderColor:
                      selectedImages[product.id] === colorOption.image
                        ? "black"
                        : "gray",
                  }}
                  onClick={() =>
                    handleColorChange(product.id, colorOption.image)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
