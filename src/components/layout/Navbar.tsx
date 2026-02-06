 "use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPageUrl, getPageNameFromPath } from "@/lib/utils";
import type { PageName } from "@/lib/utils";

const NAV_LINKS: { name: string; page: PageName }[] = [
  { name: "Home", page: "Home" },
  { name: "Products", page: "Products" },
  { name: "About Us", page: "About" },
  { name: "Contact", page: "Contact" },
];

export default function Navbar() {
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPageName = getPageNameFromPath(pathname);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const handleScroll = () => {
      const footerTop =
        footer.getBoundingClientRect().top + window.scrollY;
      const triggerY = footerTop - window.innerHeight;
      setIsOverFooter(window.scrollY >= triggerY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverFooter
          ? "bg-[#F4F3EF]/95 backdrop-blur-md shadow-md border-b border-[#E0D4BF]"
          : "bg-[#F4F3EF]/10 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={createPageUrl("Home")}
            className="flex items-center group"
            aria-label="SIDDA Home"
          >
            <Image
              src="/LogoTransparent.png"
              alt="SIDDA"
              width={140}
              height={44}
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.page}
                href={createPageUrl(link.page)}
                className={`relative font-medium text-sm tracking-[0.18em] uppercase transition-colors ${
                  isOverFooter
                    ? "text-[#6B6450] hover:text-[#171717]"
                    : "text-[#153E26] hover:text-[#0f2617]"
                } ${currentPageName === link.page ? "text-[#171717]" : ""}`}
              >
                {link.name}
                {currentPageName === link.page && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-[#D9B26A] to-[#9E7434]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isOverFooter ? "text-[#171717]" : "text-[#153E26]"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F4F3EF] border-t border-[#E0D4BF]"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.page}
                  href={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-medium ${
                    currentPageName === link.page
                      ? "text-[#171717]"
                      : "text-[#6B6450]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

