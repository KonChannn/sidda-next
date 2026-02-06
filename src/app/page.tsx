import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = buildPageMetadata({
  title: "SIDDA",
  description:
    "Cairan pencuci piring berkinerja tinggi yang sangat ampuh melawan lemak, lembut di kulit, dan lebih ramah lingkungan. Kebersihan kelas profesional untuk restoran, dapur, dan rumah tangga.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
