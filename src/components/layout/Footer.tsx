import React from "react";
import Link from "next/link";
import { Droplets, Phone, MapPin, Instagram } from "lucide-react";
import { createPageUrl } from "@/lib/utils";
import type { PageName } from "@/lib/utils";

const NAV_LINKS: { name: string; page: PageName }[] = [
  { name: "Home", page: "Home" },
  { name: "Products", page: "Products" },
  { name: "About Us", page: "About" },
  { name: "Contact", page: "Contact" },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[#171717] text-[#F4F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#D9B26A] to-[#9E7434] flex items-center justify-center shadow-lg shadow-black/40">
                <Droplets className="w-6 h-6 text-[#171717]" />
              </div>
              <span className="text-2xl font-bold tracking-[0.2em] uppercase">
                SIDDA
              </span>
            </div>
            <p className="text-[#C0B9A0] leading-relaxed text-sm">
              High-performance, eco-friendly dishwashing solution for
              professionals and households.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.2em] uppercase mb-6 text-[#F4F3EF]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.page}>
                  <Link
                    href={createPageUrl(link.page)}
                    className="text-[#C0B9A0] hover:text-[#F4F3EF] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.2em] uppercase mb-6 text-[#F4F3EF]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#C0B9A0]">
                <Phone className="w-5 h-5 text-[#C19248] shrink-0" />
                <a
                  href="tel:08778729814"
                  className="hover:text-white transition-colors"
                >
                  08778729814
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#C0B9A0]">
                <Instagram className="w-5 h-5 text-[#C19248] shrink-0" />
                <a
                  href="https://instagram.com/sidda.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @sidda.id
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#C0B9A0]">
                <MapPin className="w-5 h-5 text-[#C19248] shrink-0" />
                <span>123 Clean Street, Industrial District</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm tracking-[0.2em] uppercase mb-6 text-[#F4F3EF]">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/sidda.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2A261C] flex items-center justify-center hover:bg-[#D9B26A] hover:text-[#171717] transition-colors border border-[#403829]"
                aria-label="Instagram @sidda.id"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:08778729814"
                className="w-10 h-10 rounded-full bg-[#2A261C] flex items-center justify-center hover:bg-[#D9B26A] hover:text-[#171717] transition-colors border border-[#403829]"
                aria-label="Call 08778729814"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A261C] mt-12 pt-8 text-center text-[#807660] text-xs tracking-[0.16em] uppercase">
          <p>
            &copy; {new Date().getFullYear()} SIDDA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

