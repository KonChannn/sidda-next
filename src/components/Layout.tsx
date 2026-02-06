"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen bg-[#F4F3EF]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
