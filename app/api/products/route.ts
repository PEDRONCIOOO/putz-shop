import { NextResponse } from "next/server";

const allProducts = [
  {
    id: 1,
    name: "Snap Grip Luxe",
    description: "Grip. Stand. Charge. Stick. Works on all phones.",
    price: 3199,
    categoryId: 1, // GRIPS
    colors: [
      { color: "#D4A4FF", image: "/snapgrip-pink.webp" },
      { color: "#b8a1a0", image: "/snapgrip-dustyrose.webp" },
      { color: "#856997", image: "/snapgrip-lavanda.webp" },
      { color: "#979797", image: "/snapgrip-silver.webp" },
      { color: "#2d468d", image: "/snapgrip-skyblue.webp" },
      { color: "#000", image: "/snapgrip-black.webp" },
      { color: "#191e35", image: "/snapgrip-midnight.webp" },
      { color: "#FF0000", image: "/snapgrip-red.webp" },
      { color: "#FF8C00", image: "/snapgrip-orange.webp" },
    ],
  },
  {
    id: 2,
    name: "Snap Grip Wallet",
    description:
      "Expandable MagSafe® Wallet with Grip, Stand, & Magnetic Mounting ",
    price: 6999,
    categoryId: 2, // WALLET
    colors: [
      { color: "#784f5a", image: "/walletgrip-berry.webp" },
      { color: "#000000", image: "/walletgrip-black.webp" },
      { color: "#989dc4", image: "/walletgrip-blue.webp" },
      { color: "#585858", image: "/walletgrip-carbon.webp" },
      { color: "#919f7f", image: "/walletgrip-green.webp" },
    ],
  },
  {
    id: 3,
    name: "Snap Car Mount",
    description: "Auto Aligning, Magnetic Car Mount",
    price: 3199,
    categoryId: 3, // MOUNT
    colors: [{ color: "#585858", image: "/carmount-gray.webp" }],
  },
  {
    id: 4,
    name: "Case + Grip Kit - 16 Series",
    description: "Aluminum Buttons, 2X Trims, MagSafe® & Snap Grip Compatible",
    price: 6999,
    categoryId: 4, // CASES
    colors: [
      { color: "#784f5a", image: "/gripkit-berry.webp" },
      { color: "#c79980", image: "/gripkit-brown.webp" },
      { color: "#a9ebec", image: "/gripkit-ciane.webp" },
      { color: "#a99191", image: "/gripkit-darkrose.webp" },
      { color: "#919f7f", image: "/gripkit-green.webp" },
      { color: "#191e35", image: "/gripkit-midnight.webp" },
      { color: "#191223", image: "/gripkit-obsidian.webp" },
      { color: "#856997", image: "/gripkit-purple.webp" },
      { color: "#e6e6d6", image: "/gripkit-sand.webp" },
      { color: "#c1c1c1", image: "/gripkit-silver.webp" },
      { color: "#9c9890", image: "/gripkit-stone.webp" },
    ],
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
