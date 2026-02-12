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
    title: "Daya Bersih Maksimal",
    description:
      "Mengangkat minyak, lemak, dan bau amis hanya dalam satu kali cuci. Tidak perlu menggosok berulang-ulang.",
  },
  {
    icon: Leaf,
    title: "Formula Ramah Lingkungan",
    description:
      "Bahan yang mudah terurai dan aman bagi lingkungan tanpa mengorbankan kualitas pencucian.",
  },
  {
    icon: Shield,
    title: "Aman untuk Kulit",
    description:
      "Tanpa paraben, fosfat, atau bahan kimia keras. Lembut untuk tangan meski digunakan sepanjang hari.",
  },
  {
    icon: Clock,
    title: "Hemat Waktu & Tenaga",
    description:
      "Menghemat waktu, air, dan tenaga di jam-jam sibuk dengan formula yang bekerja cepat.",
  },
];

const STATS = [
  { value: "5L", label: "Ukuran Jerigen" },
  { value: "100%", label: "Biodegradabel" },
  { value: "1", label: "Kali Cuci" },
  { value: "0", label: "Bahan Kimia Keras" },
];

const FLAGSHIP_BULLETS = [
  "Langsung melarutkan minyak dan lemak membandel",
  "Menghilangkan bau amis dan bau tak sedap",
  "Biodegradabel dan ramah lingkungan",
  "Formula telah diuji secara dermatologis",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F4F3EF] via-[#F4F3EF] to-[#E6D8C2] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[-4rem] w-80 h-80 bg-[#D9B26A]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-3rem] right-[-4rem] w-[26rem] h-[26rem] bg-[#C19248]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] border border-[#D9B26A]/30 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-[#9E7434] text-xs tracking-[0.25em] font-semibold mb-8 uppercase">
              <Droplets className="w-4 h-4" />
              Kebersihan Kelas Profesional
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] mb-6 leading-tight tracking-[0.12em] uppercase"
          >
            Daya Bersih,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#9E7434]">
              Formula Aman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#4B4635] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Cairan pencuci piring berkinerja tinggi yang sangat ampuh mengangkat
            lemak, tetap lembut di kulit, dan lebih bersahabat bagi lingkungan.
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
                className="bg-[#171717] text-[#F4F3EF] hover:bg-black px-10 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-black/20 border border-[#D9B26A]/60 group"
              >
                Lihat Produk
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={createPageUrl("Contact")}>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#171717] text-[#F4F3EF] hover:bg-black px-10 py-6 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                Hubungi Kami
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
          <div className="w-6 h-10 rounded-full border-2 border-[#9E7434]/40 flex justify-center pt-2 bg-white/70 backdrop-blur">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#9E7434] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4F3EF] ">
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
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#9E7434] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#6B6450] font-medium tracking-wide uppercase text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Mengapa Memilih SIDDA"
            title="Performa Tinggi, Tetap Aman"
            description="Diformulasikan untuk profesional yang menuntut kekuatan bersih maksimal sekaligus tanggung jawab terhadap kesehatan dan lingkungan."
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
      <section className="min-h-screen flex items-center py-24 bg-[#F4F3EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#9E7434] font-semibold text-xs tracking-[0.25em] uppercase mb-4 block">
                Produk Unggulan Kami
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#171717] tracking-[0.08em] uppercase">
                Jerigen Profesional 5 Liter
              </h2>
              <p className="text-lg text-[#4B4635] mb-8 leading-relaxed">
                Ideal untuk restoran, jasa katering, dapur profesional, dan
                rumah tangga modern yang menuntut hasil terbaik.
              </p>

              <ul className="space-y-4 mb-10">
                {FLAGSHIP_BULLETS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9B26A] flex-shrink-0" />
                    <span className="text-[#4B4635]">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href={createPageUrl("Products")}>
                <Button
                  size="lg"
                  className="bg-[#171717] text-[#F4F3EF] hover:bg-black px-10 py-6 text-lg font-semibold rounded-full shadow-xl shadow-black/20 border border-[#D9B26A]/60 group"
                >
                  Lihat Detail Produk
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
                <div className="absolute inset-6 border border-[#D9B26A]/40 rounded-[2rem] bg-[#F4F3EF]/80 shadow-[0_40px_80px_rgba(0,0,0,0.18)]" />
                <div className="relative rounded-[1.75rem] overflow-hidden flex items-center justify-center w-full h-full">
                  <Image
                    src="/Jerigen.png"
                    alt="SIDDA 5L Lemon Dishwashing Liquid - Professional grade, strong against grease, eliminates fishy odors"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                {/* <div className="mt-6 text-center">
                  <div className="text-2xl font-bold tracking-[0.2em] uppercase text-[#171717]">
                    SIDDA
                  </div>
                  <div className="text-sm text-[#6B6450] tracking-[0.18em] uppercase">
                    5L Dishwashing Liquid
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#F4F3EF]">
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
            <blockquote className="text-2xl md:text-3xl font-medium text-[#3E3A2C] mb-8 leading-relaxed">
              &quot;SIDDA benar-benar mengubah cara kerja dapur kami. Satu kali
              cuci sudah cukup, dan staf kami menyukai betapa lembutnya di
              tangan meski dipakai sepanjang shift.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#171717] flex items-center justify-center text-white font-bold text-xl">
                KJ
              </div>  
              <div className="text-left">
                <div className="font-semibold text-[#171717]">
                  Kevin Jonathan 
                </div>
                <div className="text-[#6B6450]">
                  Owner, Laitea
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#171717] via-[#1F1B14] to-[#2B2419]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-[0.12em] uppercase">
              Siap Merasakan Perbedaannya?
            </h2>
            <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan profesional yang telah mempercayakan
              kebutuhan kebersihan hariannya kepada SIDDA.
            </p>
            <Link href={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-[#F4F3EF] text-[#171717] hover:bg-[#F4F3EF] px-10 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-black/30 border border-[#D9B26A]/70"
              >
                Hubungi Kami Hari Ini
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
