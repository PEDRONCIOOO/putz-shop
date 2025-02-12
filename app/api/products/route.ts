import { NextResponse } from "next/server";

import {
  SnapCarMount,
  SnapStand,
  SnapWallMount,
  CarPowerKit,
} from "@/public/index";

const allProducts = [
  {
    id: 1,
    name: "Snap Car Mount",
    description: "Magnetic, hassle-free car mount.",
    price: 3499,
    categoryId: 2,
    image: SnapCarMount,
  },
  {
    id: 2,
    name: "Snap Stand",
    description: "Magnetic, 360-degree premium stand.",
    price: 3999,
    categoryId: 3,
    image: SnapStand,
  },
  {
    id: 3,
    name: "Snap Wall Mount",
    description: "Magnetic, reusable mount.",
    price: 1499,
    categoryId: 3,
    image: SnapWallMount,
  },
  {
    id: 4,
    name: "Car Power Kit",
    description: "Snap Grip Luxe + Snap Car Mount.",
    price: 9499,
    oldPrice: 11499,
    categoryId: 3,
    image: CarPowerKit,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  if (categoryId) {
    const filteredProducts = allProducts.filter(
      (product) => product.categoryId === Number(categoryId),
    );

    return NextResponse.json(filteredProducts);
  }

  return NextResponse.json(allProducts);
}
