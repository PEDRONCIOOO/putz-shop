import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import { title } from "@/components/primitives";

async function fetchCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
  );

  return response.json();
}

export default async function PricingPage() {
  const categories = await fetchCategories();

  return (
    <div>
      <h1 className={title()}>Categorias</h1>
      <Suspense fallback={<p>Carregando categorias...</p>}>
        <CategoryGrid categories={categories} />
      </Suspense>
    </div>
  );
}

function CategoryGrid({
  categories,
}: {
  categories: { id: number; name: string; image: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <Link key={category.id} passHref href={`/categories/${category.id}`}>
          <div className="cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-black flex flex-col items-center dark:bg-white">
            <Image
              alt={category.name}
              className="w-44 h-36 shadow-lg hover:shadow-xl transition-shadow border-x-small border-y-small object-cover mb-4 rounded-md dark:border-black"
              height={200}
              loading="lazy"
              src={category.image}
              width={200}
            />
            <h2 className="text-lg font-extrabold text-white dark:text-black">
              {category.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
