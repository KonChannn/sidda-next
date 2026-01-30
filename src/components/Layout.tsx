"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Droplets, Phone, MapPin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPageUrl, getPageNameFromPath } from "@/lib/utils";
import type { PageName } from "@/lib/utils";

const NAV_LINKS: { name: string; page: PageName }[] = [
  { name: "Home", page: "Home" },
  { name: "Products", page: "Products" },
  { name: "About Us", page: "About" },
  { name: "Contact", page: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPageName = getPageNameFromPath(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
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
                className={`object-contain transition-transform group-hover:scale-105 ${
                  isScrolled ? "" : "brightness-0 invert" 
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.page}
                  href={createPageUrl(link.page)}
                  className={`relative font-medium transition-colors ${
                    isScrolled
                      ? "text-slate-500 hover:text-slate-700"
                      : "text-white/75 hover:text-white/100"
                  } ${currentPageName === link.page ? "text-slate-700" : ""}`}
                >
                  {link.name}
                      {currentPageName === link.page && (
                    <motion.div
                      layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#153E26] to-[#C19248]"
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
                isScrolled ? "text-slate-800" : "text-white"
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
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.page}
                    href={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 font-medium ${
                      currentPageName === link.page
                        ? "text-green-800"
                        : "text-slate-600"
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

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#153E26] to-[#153E26] flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-[#D9B26A]" />
                </div>
                <span className="text-2xl font-bold">SIDDA</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                High-performance, eco-friendly dishwashing solution for
                professionals and households.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.page}>
                    <Link
                      href={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-[#C19248] shrink-0" />
                  <a
                    href="tel:08778729814"
                    className="hover:text-white transition-colors"
                  >
                    08778729814
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
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
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-[#C19248] shrink-0" />
                  <span>123 Clean Street, Industrial District</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/sidda.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                  aria-label="Instagram @sidda.id"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="tel:08778729814"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                  aria-label="Call 08778729814"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} SIDDA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
