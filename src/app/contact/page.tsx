import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch with SIDDA. Questions, orders, or wholesale inquiries. We respond within 24 hours. Phone, email, and contact form.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
