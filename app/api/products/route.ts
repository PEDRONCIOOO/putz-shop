import { NextResponse } from "next/server";

import {
  SnapCarMount,
  SnapStand,
  SnapWallMount,
  CarPowerKit,
} from "@/public/index"; // Substitua pelas suas imagens reais

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Snap Car Mount",
      description:
        "Magnetic, hassle-free car mount. Milled aluminum base with high-bond adhesive.",
      price: 3499, // Em centavos para integração com Stripe
      categoryId: 3, // Relacionado à categoria "MOUNT"
      image: SnapCarMount,
    },
    {
      id: 2,
      name: "Snap Stand",
      description:
        "Magnetic, 360-degree premium stand designed for perfect height and angle.",
      price: 3999,
      categoryId: 3,
      image: SnapStand,
    },
    {
      id: 3,
      name: "Snap Wall Mount",
      description:
        "Magnetic, reusable, MagSafe-compatible mount for easy placement.",
      price: 1499,
      categoryId: 3,
      image: SnapWallMount,
    },
    {
      id: 4,
      name: "Car Power Kit",
      description:
        "Snap Grip Luxe + Snap Car Mount + Snap Charge. Magnetic wireless charging car mount.",
      price: 9499,
      oldPrice: 11499, // Preço antigo para exibição no front-end
      categoryId: 3,
      image: CarPowerKit,
    },
  ]);
}
