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
    title: "Telepon",
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
    title: "Alamat",
    details: ["Jalan Bersih No. 123", "Kawasan Industri, NY 10001"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08.00 - 18.00", "Sabtu: 09.00 - 14.00"],
  },
];

const FAQ_ITEMS = [
  {
    q: "Berapa minimum pemesanan?",
    a: "Untuk pembelian eceran tidak ada minimum. Untuk pembelian grosir, minimum pemesanan adalah 10 unit (total 50 liter).",
  },
  {
    q: "Apakah SIDDA melayani pengiriman internasional?",
    a: "Ya, kami mengirim ke banyak negara di seluruh dunia. Biaya dan estimasi waktu pengiriman menyesuaikan dengan lokasi.",
  },
  {
    q: "Apakah SIDDA aman untuk sistem septik?",
    a: "Tentu saja! Formula biodegradabel kami aman digunakan untuk semua sistem septik dan instalasi pengolahan air.",
  },
  {
    q: "Berapa lama waktu pengiriman?",
    a: "Untuk pengiriman dalam negeri, pesanan biasanya tiba dalam 3–5 hari kerja. Pengiriman internasional dapat memakan waktu 7–14 hari kerja.",
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#F4F3EF] via-[#F4F3EF] to-[#E6D8C2] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[-4rem] w-80 h-80 bg-[#D9B26A]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-3rem] right-[-4rem] w-[26rem] h-[26rem] bg-[#C19248]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-[#D9B26A]/30 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] mb-6 tracking-[0.12em] uppercase">
              Hubungi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#9E7434]">
                Kami
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#4B4635] max-w-3xl mx-auto leading-relaxed">
              Punya pertanyaan atau siap untuk memesan? Kami siap membantu Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-[#171717] mb-8 text-center">
              Informasi Kontak
            </h2>

            <div className="space-y-8">
              {CONTACT_INFO.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#D9B26A] to-[#9E7434] flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[#4B4635] hover:text-[#171717] transition-colors"
                        >
                          {info.details.join(", ")}
                        </a>
                      ) : (
                        info.details.map((detail, idx) => (
                          <p key={idx} className="text-[#4B4635]">
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
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Pertanyaan Umum"
            title="Yang Sering Ditanyakan"
            description="Jawaban singkat untuk pertanyaan yang paling sering kami terima."
          />

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-[#E0D4BF]"
              >
                <h3 className="font-semibold text-[#171717] mb-2">{faq.q}</h3>
                <p className="text-[#4B4635]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
