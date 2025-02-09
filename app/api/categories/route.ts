import { NextResponse } from "next/server";

import {
  CasesCategory,
  GripCategory,
  MountCategory,
  WalletCategory,
} from "@/public/index";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "GRIPS", image: GripCategory },
    { id: 2, name: "WALLET", image: WalletCategory },
    { id: 3, name: "MOUNT", image: MountCategory },
    { id: 4, name: "CASES", image: CasesCategory },
  ]);
}
