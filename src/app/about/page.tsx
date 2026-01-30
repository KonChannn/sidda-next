import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about SIDDA: our story, mission, vision, and core values. We believe powerful cleaning and environmental responsibility go hand in hand.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
