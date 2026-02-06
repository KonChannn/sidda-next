import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import ProductsPage from "@/components/pages/ProductsPage";

export const metadata: Metadata = buildPageMetadata({
  title: "Produk",
  description:
    "SIDDA 5L cairan pencuci piring profesional. Bersih sekali cuci, biodegradabel, aman untuk kulit. Spesifikasi, keunggulan, dan opsi pemesanan besar untuk restoran dan dapur.",
  path: "/products",
});

export default function Page() {
  return <ProductsPage />;
}
