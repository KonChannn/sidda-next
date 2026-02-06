import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontak",
  description:
    "Hubungi SIDDA untuk pertanyaan, pemesanan, atau informasi grosir. Kami merespons dalam 24 jam. Tersedia kontak telepon, email, dan formulir.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
