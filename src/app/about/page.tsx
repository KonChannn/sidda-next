import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = buildPageMetadata({
  title: "Tentang Kami",
  description:
    "Kenali SIDDA: kisah, misi, visi, dan nilai inti kami. Kami percaya kekuatan bersih maksimal dan tanggung jawab lingkungan harus berjalan beriringan.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
