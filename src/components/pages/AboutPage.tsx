"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Leaf,
  Shield,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every formula we create prioritizes the health and safety of users and the environment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously research and develop better, more effective cleaning solutions.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Our commitment to biodegradable ingredients reflects our responsibility to the planet.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We listen to professionals and households to create products that truly solve their problems.",
  },
];

const MILESTONES = [
  { year: "2015", event: "SIDDA founded with a vision for safer cleaning" },
  { year: "2017", event: "Launched our first biodegradable formula" },
  { year: "2019", event: "Expanded to serve 500+ professional kitchens" },
  { year: "2021", event: "Achieved eco-certification for all products" },
  { year: "2023", event: "Reached 1,000+ satisfied business clients" },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-green-900 via-green-800 to-teal-800">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400">
                SIDDA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              We believe that powerful cleaning and environmental responsibility
              should go hand in hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-green-800 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Born from a Simple Question
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Why should professional kitchens have to choose between
                  effective cleaning and the safety of their staff? This question
                  sparked the creation of SIDDA.
                </p>
                <p>
                  We saw kitchen workers dealing with harsh chemicals that dried
                  out their skin, restaurants struggling with products that
                  couldn&apos;t handle heavy grease, and an industry that had
                  accepted these compromises as normal.
                </p>
                <p>
                  SIDDA was founded to challenge that status quo. We assembled a
                  team of chemists and industry experts to develop a formula that
                  delivers professional-grade cleaning power while being gentle
                  enough for all-day use.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop"
                  alt="Professional kitchen"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-amber-600">
                  1000+
                </div>
                <div className="text-slate-600">
                  Professional kitchens trust SIDDA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-800 to-green-700 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide high-performance cleaning solutions that protect both
                people and the planet, making professional-grade hygiene
                accessible and sustainable for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the global leader in eco-friendly cleaning products,
                setting the standard for how the industry approaches safety,
                effectiveness, and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Core Values"
            description="These principles guide every decision we make and every product we create."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-green-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Key Milestones
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-teal-500" />

            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12"
                  } pl-12 md:pl-0`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-amber-400 font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-white/80">{milestone.event}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-amber-400 to-teal-400 rounded-full -translate-x-1/2 border-4 border-slate-900" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-green-800 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Commitment to You
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                We promise to never compromise on quality or safety. Every
                bottle of SIDDA that leaves our facility has been tested to meet
                the highest standards of performance and safety. Your trust is
                our most valuable asset.
              </p>
              <Link href={createPageUrl("Contact")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-800 to-teal-700 hover:from-green-900 hover:to-teal-800 text-white px-10 py-6 text-lg font-semibold rounded-xl group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
