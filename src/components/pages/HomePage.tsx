"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Droplets,
  Leaf,
  Shield,
  Zap,
  Clock,
  Heart,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: Zap,
    title: "Powerful Cleaning",
    description:
      "Cuts through oil, grease, and fishy odors in one wash. No repeated scrubbing needed.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Formula",
    description:
      "Biodegradable ingredients that are safe for the environment without compromising performance.",
  },
  {
    icon: Shield,
    title: "Skin Safe",
    description:
      "No parabens, phosphates, or harsh chemicals. Gentle enough for all-day use.",
  },
  {
    icon: Clock,
    title: "Time Efficient",
    description:
      "Save time, water, and effort during peak hours with our fast-acting formula.",
  },
];

const STATS = [
  { value: "5L", label: "Jerrycan Size" },
  { value: "100%", label: "Biodegradable" },
  { value: "1", label: "Wash Needed" },
  { value: "0", label: "Harsh Chemicals" },
];

const FLAGSHIP_BULLETS = [
  "Cuts through oil and grease instantly",
  "Eliminates fishy and stubborn odors",
  "Biodegradable and eco-friendly",
  "Dermatologically tested formula",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#153E26] via-[#153E26] to-[#9E7434] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#D9B26A] text-sm font-medium mb-8">
              <Droplets className="w-4 h-4" />
              Professional Grade Cleaning
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Clean Power,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#C19248]">
              Safe Formula
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            High-performance dishwashing liquid that&apos;s tough on grease,
            gentle on skin, and kind to the planet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={createPageUrl("Products")}>
              <Button
                size="lg"
                className="bg-[#C19248] text-[#153E26] hover:bg-[#9E7434] px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl shadow-[#C19248]/20 group"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-[#153E26] hover:bg-[#0f2a18] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transition-colors"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-amber-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Choose SIDDA"
            title="Performance Meets Safety"
            description="Designed for professionals who demand both power and responsibility in their cleaning products."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="min-h-screen flex items-center py-24 bg-gradient-to-br from-slate-900 to-green-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Flagship Product
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                5-Liter Professional Jerrycan
              </h2>
              <p className="text-xl text-green-100/70 mb-8 leading-relaxed">
                Perfect for restaurants, catering services, professional
                kitchens, and modern households that demand the best.
              </p>

              <ul className="space-y-4 mb-10">
                {FLAGSHIP_BULLETS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-green-100">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href={createPageUrl("Products")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-600 hover:to-teal-600 text-white px-8 py-6 text-lg font-semibold rounded-xl group"
                >
                  View Product Details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-teal-500/30 rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl overflow-hidden flex items-center justify-center w-full h-full">
                  <Image
                    src="/Jerigen.png"
                    alt="SIDDA 5L Lemon Dishwashing Liquid - Professional grade, strong against grease, eliminates fishy odors"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold">SIDDA</div>
                  <div className="text-green-200">5L Dishwashing Liquid</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-700 mb-8 leading-relaxed">
              &quot;SIDDA has transformed our kitchen operations. One wash is
              truly all it takes, and our staff loves how gentle it is on their
              hands even after a full shift.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-800 to-teal-700 flex items-center justify-center text-white font-bold text-xl">
                MR
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">
                  Marco Rodriguez
                </div>
                <div className="text-slate-500">
                  Head Chef, The Grand Kitchen
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-800 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who trust SIDDA for their daily
              cleaning needs.
            </p>
            <Link href={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-amber-500 text-green-900 hover:bg-amber-400 px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl"
              >
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
