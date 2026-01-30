import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = buildPageMetadata({
  title: "SIDDA",
  description:
    "High-performance dishwashing liquid that's tough on grease, gentle on skin, and kind to the planet. Professional-grade cleaning for restaurants, kitchens, and households.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
