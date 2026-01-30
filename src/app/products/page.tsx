import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import ProductsPage from "@/components/pages/ProductsPage";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "SIDDA 5L professional dishwashing liquid. One-wash power, biodegradable, skin-safe. Specifications, benefits, and bulk order options for restaurants and kitchens.",
  path: "/products",
});

export default function Page() {
  return <ProductsPage />;
}
