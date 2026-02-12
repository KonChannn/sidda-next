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
    title: "Keamanan Utama",
    description:
      "Setiap formula yang kami kembangkan mengutamakan kesehatan dan keselamatan pengguna sekaligus lingkungan.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description:
      "Kami terus meneliti dan mengembangkan solusi pembersih yang lebih baik dan lebih efektif.",
  },
  {
    icon: Leaf,
    title: "Keberlanjutan",
    description:
      "Komitmen kami pada bahan-bahan biodegradabel adalah wujud tanggung jawab kami terhadap bumi.",
  },
  {
    icon: Users,
    title: "Fokus pada Pelanggan",
    description:
      "Kami mendengarkan kebutuhan profesional dan rumah tangga untuk menciptakan produk yang benar-benar menjawab masalah mereka.",
  },
];

const MILESTONES = [
  {
    year: "2015",
    event: "SIDDA didirikan dengan visi menghadirkan kebersihan yang lebih aman",
  },
  {
    year: "2017",
    event: "Meluncurkan formula biodegradabel pertama kami",
  },
  {
    year: "2019",
    event: "Bertumbuh melayani 500+ dapur profesional",
  },
  {
    year: "2021",
    event: "Seluruh produk meraih sertifikasi ramah lingkungan",
  },
  {
    year: "2023",
    event: "Mencapai lebih dari 1.000 klien bisnis yang puas",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero + Timeline — single section with consistent spacing */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#F4F3EF] via-[#F4F3EF] to-[#E6D8C2] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[-4rem] w-80 h-80 bg-[#D9B26A]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-3rem] right-[-4rem] w-[26rem] h-[26rem] bg-[#C19248]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-[#D9B26A]/30 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero block */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] mb-6 tracking-[0.12em] uppercase">
                Tentang{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#9E7434]">
                  SIDDA
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#4B4635] leading-relaxed">
                Kami percaya bahwa kekuatan bersih maksimal dan tanggung jawab
                terhadap lingkungan harus berjalan beriringan.
              </p>
            </motion.div>
          </div>

          {/* Key Milestones — consistent margin from hero subheader */}
          {/* <div className="mt-24 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#9E7434] font-semibold text-xs tracking-[0.25em] uppercase mb-4 block">
                Perjalanan Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-[0.08em] uppercase">
                Tonggak Penting
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#D9B26A] to-[#9E7434]" />

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
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-[#E0D4BF]">
                    <div className="text-[#9E7434] font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-[#4B4635]">{milestone.event}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-linear-to-br from-[#D9B26A] to-[#9E7434] rounded-full -translate-x-1/2 border-4 border-[#F4F3EF]" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#9E7434] font-semibold text-sm tracking-[0.25em] uppercase mb-4 block">
                Kisah Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-6 tracking-[0.08em] uppercase">
                Berawal dari Satu Pertanyaan Sederhana
              </h2>
              <div className="space-y-4 text-lg text-[#4B4635] leading-relaxed">
                <p>
                  Mengapa dapur profesional harus memilih antara hasil bersih
                  yang maksimal atau keselamatan tim mereka? Pertanyaan inilah
                  yang memicu lahirnya SIDDA.
                </p>
                <p>
                  Kami melihat banyak pekerja dapur bergulat dengan bahan kimia
                  keras yang membuat kulit kering, restoran yang kesulitan
                  dengan produk yang tak mampu menaklukkan lemak berat, dan
                  sebuah industri yang sudah menganggap kompromi ini sebagai
                  hal biasa.
                </p>
                <p>
                  SIDDA didirikan untuk menantang kondisi tersebut. Kami
                  mengumpulkan tim kimiawan dan praktisi industri untuk
                  mengembangkan formula yang memberikan daya bersih setara
                  profesional, namun tetap lembut untuk penggunaan sepanjang
                  hari.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#E6D8C2] to-[#F4F3EF] overflow-hidden border border-[#E0D4BF]">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop"
                  alt="Professional kitchen"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F4F3EF] rounded-2xl shadow-xl p-6 max-w-xs border border-[#E0D4BF]">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#D9B26A] to-[#9E7434]">
                  1000+
                </div>
                <div className="text-[#6B6450]">
                  Professional kitchens trust SIDDA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Mission & Vision */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-[#E0D4BF]"
            >
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[#D9B26A] to-[#9E7434] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">
                Misi Kami
              </h3>
              <p className="text-lg text-[#4B4635] leading-relaxed">
                Menyediakan solusi kebersihan berkinerja tinggi yang melindungi
                manusia dan bumi, sehingga standar kebersihan profesional dapat
                diakses dan berkelanjutan bagi semua.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-[#E0D4BF]"
            >
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[#D9B26A] to-[#9E7434] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">
                Visi Kami
              </h3>
              <p className="text-lg text-[#4B4635] leading-relaxed">
                Menjadi pemimpin global dalam produk pembersih ramah
                lingkungan, dan menjadi standar baru dalam hal keamanan,
                efektivitas, serta tanggung jawab terhadap lingkungan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Nilai yang Kami Pegang"
            title="Nilai Inti SIDDA"
            description="Prinsip-prinsip ini membimbing setiap keputusan dan setiap produk yang kami hadirkan."
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F4E3C5] to-[#E6D8C2] flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#9E7434]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#171717] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#4B4635]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Commitment */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-[#9E7434] mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-6">
                Komitmen Kami untuk Anda
              </h2>
              <p className="text-xl text-[#4B4635] leading-relaxed mb-10">
                Kami berjanji untuk tidak pernah berkompromi pada kualitas dan
                keamanan. Setiap botol SIDDA yang keluar dari fasilitas kami
                telah diuji untuk memenuhi standar tertinggi performa dan
                keselamatan. Kepercayaan Anda adalah aset paling berharga bagi
                kami.
              </p>
              <Link href={createPageUrl("Contact")}>
                <Button
                  size="lg"
                  className="bg-[#171717] text-[#F4F3EF] hover:bg-black px-10 py-6 text-lg font-semibold rounded-full shadow-xl shadow-black/20 border border-[#D9B26A]/60 group"
                >
                  Hubungi Kami
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
