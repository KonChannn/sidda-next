"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Leaf,
  Shield,
  Zap,
  Clock,
  Sparkles,
  Beaker,
  Package,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: Zap,
    title: "One-Wash Power",
    description:
      "Cuts through the toughest oil, grease, and fishy odors in a single wash.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description:
      "No repeated scrubbing needed—save valuable time during peak hours.",
  },
  {
    icon: Leaf,
    title: "Biodegradable",
    description:
      "Environmentally responsible formula that breaks down naturally.",
  },
  {
    icon: Shield,
    title: "Skin Safe",
    description:
      "Gentle enough for all-day use without irritation or dryness.",
  },
  {
    icon: Sparkles,
    title: "Streak-Free Shine",
    description:
      "Leaves dishes sparkling clean without residue or film.",
  },
  {
    icon: Beaker,
    title: "No Harsh Chemicals",
    description:
      "Free from parabens, phosphates, and synthetic irritants.",
  },
];

const SPECIFICATIONS = [
  { label: "Volume", value: "5 Liters" },
  { label: "Packaging", value: "HDPE Jerrycan" },
  { label: "pH Level", value: "Neutral (6.5-7.5)" },
  { label: "Fragrance", value: "Fresh Citrus" },
  { label: "Shelf Life", value: "24 Months" },
  { label: "Certification", value: "Eco-Certified" },
];

const IDEAL_FOR = [
  "Professional Restaurants",
  "Catering Services",
  "Hotel Kitchens",
  "Food Processing Plants",
  "Modern Households",
  "Cafeterias & Canteens",
];

const SAFETY_ITEMS = [
  { title: "No Parabens", desc: "Free from harmful preservatives" },
  { title: "No Phosphates", desc: "Environmentally responsible" },
  { title: "No Harsh Chemicals", desc: "Safe for daily use" },
];

export default function ProductsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-gradient-to-br from-[#153E26] via-[#153E26] to-[#9E7434]">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#C19248]/20 text-[#D9B26A] border-[#C19248]/30 mb-6">
                Professional Grade
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                SIDDA 5L{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#C19248]">
                  Dishwashing Liquid
                </span>
              </h1>
              <p className="text-xl text-green-100/80 mb-8 leading-relaxed">
                High-performance cleaning power engineered for demanding
                environments. Tough on grease, gentle on everything else.
              </p>
              <Link href={createPageUrl("Contact")}>
                <Button
                  size="lg"
                  className="bg-[#C19248] text-[#153E26] hover:bg-[#9E7434] px-8 py-6 text-lg font-semibold rounded-xl group"
                >
                  Order Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-teal-500/40 rounded-3xl blur-2xl" /> */}
                {/* <div className="relative bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-10 backdrop-blur-sm border border-white/20"> */}
                  <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                    <Image
                      src="/Label.png"
                      alt="SIDDA Lemon Dishwashing Liquid label - Strong against grease, eliminates fishy odors, professional grade"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
                      priority
                    />
                  </div>
                {/* </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Key Benefits"
            title="Why Professionals Choose SIDDA"
            description="Every bottle is engineered to deliver exceptional results while maintaining the highest safety standards."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-green-50 hover:to-amber-50 transition-all duration-300 border border-slate-100 hover:border-amber-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-800 to-green-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {(() => {
                    const Icon = benefit.icon;
                    return <Icon className="w-7 h-7 text-amber-400" />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Package className="w-6 h-6 text-green-800" />
                <h2 className="text-3xl font-bold text-slate-800">
                  Product Specifications
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {SPECIFICATIONS.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between items-center p-5 ${
                      index !== SPECIFICATIONS.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <span className="text-slate-600">{spec.label}</span>
                    <span className="font-semibold text-slate-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ideal For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-amber-600" />
                <h2 className="text-3xl font-bold text-slate-800">Ideal For</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {IDEAL_FOR.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-700 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-green-800 to-teal-700 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Bulk Orders Available
                </h3>
                <p className="text-white/80 mb-4">
                  Special pricing for large orders. Contact us for wholesale
                  inquiries.
                </p>
                <Link href={createPageUrl("Contact")}>
                  <Button
                    variant="secondary"
                    className="bg-amber-500 text-green-900 hover:bg-amber-400"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Safety First"
              title="What's NOT in SIDDA"
              description="We believe powerful cleaning shouldn't come at the cost of safety. Here's what we've deliberately left out."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {SAFETY_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Cleaning Routine?
            </h2>
            <p className="text-xl text-green-100/70 mb-10">
              Experience the SIDDA difference. Contact us today for orders and
              inquiries.
            </p>
            <Link href={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white px-10 py-6 text-lg font-semibold rounded-xl"
              >
                Contact Sales Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
