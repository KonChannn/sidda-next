"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

const CONTACT_INFO: {
  icon: LucideIcon;
  title: string;
  details: string[];
  href?: string;
}[] = [
  {
    icon: Phone,
    title: "Phone",
    details: ["08778729814"],
    href: "tel:08778729814",
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["@sidda.id"],
    href: "https://instagram.com/sidda.id",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@sidda.com", "sales@sidda.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Clean Street", "Industrial District, NY 10001"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"],
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the minimum order quantity?",
    a: "For individual purchases, there's no minimum. For wholesale orders, the minimum is 10 units (50 liters total).",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    q: "Is SIDDA safe for septic systems?",
    a: "Absolutely! Our biodegradable formula is completely safe for all septic systems and water treatment facilities.",
  },
  {
    q: "How long does shipping take?",
    a: "Domestic orders typically arrive within 3-5 business days. International orders may take 7-14 business days.",
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#153E26] via-[#153E26] to-[#9E7434]">
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#C19248]">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
              Have questions or ready to order? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Contact Information
            </h2>

            <div className="space-y-8">
              {CONTACT_INFO.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-slate-600 hover:text-green-800 transition-colors"
                        >
                          {info.details.join(", ")}
                        </a>
                      ) : (
                        info.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-600">
                            {detail}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Common Questions"
            title="Frequently Asked"
            description="Quick answers to questions we hear often."
          />

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-100"
              >
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
