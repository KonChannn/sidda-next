"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Wind,
  Truck,
  Zap,
  Clock,
  Sparkles,
  Wallet,
  Package,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: Zap,
    title: "Bersih Sekali Cuci",
    description:
      "Mengangkat minyak, lemak, dan bau amis paling bandel hanya dalam satu kali cuci.",
  },
  {
    icon: Clock,
    title: "Hemat Waktu",
    description:
      "Tanpa perlu menggosok berulang—menghemat waktu berharga di jam-jam sibuk.",
  },
  {
    icon: Wind,
    title: "Aroma Segar Tahan Lama",
    description:
      "Membersihkan sambil meninggalkan aroma segar yang bertahan lama di setiap peralatan makan.",
  },
  {
    icon: Truck,
    title: "Sistem Delivery Terpercaya",
    description:
      "Pengiriman cepat, terjadwal, dan konsisten sehingga stok cairan pencuci Anda selalu aman.",
  },
  {
    icon: Sparkles,
    title: "Bersih Berkilau",
    description:
      "Meninggalkan piring bersih berkilau tanpa bekas sabun atau lapisan buram.",
  },
  {
    icon: Wallet,
    title: "Harga Terjangkau untuk Bisnis",
    description:
      "Kualitas profesional dengan harga kompetitif sehingga biaya operasional tetap efisien.",
  },
];

const SPECIFICATIONS = [
  { label: "Volume", value: "5 Liter" },
  { label: "Kemasan", value: "Jerigen HDPE" },
  { label: "Tingkat pH", value: "Netral (6,5–7,5)" },
  { label: "Aroma", value: "Jeruk Segar" },
  // { label: "Sertifikasi", value: "Eco-Certified" },
];

const IDEAL_FOR = [
  "Restoran Profesional",
  "Jasa Katering",
  "Dapur Hotel",
  "Pabrik Pengolahan Makanan",
  "Rumah Tangga Modern",
  "Kantin & Kafetaria",
];

const SAFETY_ITEMS = [
  { title: "Tanpa Paraben", desc: "Bebas bahan pengawet berbahaya" },
  { title: "Tanpa Fosfat", desc: "Lebih bertanggung jawab terhadap lingkungan" },
  { title: "Tanpa Bahan Kimia Keras", desc: "Aman untuk penggunaan harian" },
];

export default function ProductsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-gradient-to-br from-[#F4F3EF] via-[#F4F3EF] to-[#E6D8C2] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[-4rem] w-80 h-80 bg-[#D9B26A]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-3rem] right-[-4rem] w-[26rem] h-[26rem] bg-[#C19248]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-[#D9B26A]/30 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white/60 text-[#9E7434] border-[#D9B26A]/40 mb-6 tracking-[0.25em] uppercase">
                Kelas Profesional
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] mb-6 leading-tight tracking-[0.12em] uppercase">
                SIDDA 5L{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9B26A] to-[#9E7434]">
                  Dishwashing Liquid
                </span>
              </h1>
              <p className="text-lg text-[#4B4635] mb-8 leading-relaxed">
                Daya bersih tinggi yang dirancang untuk kebutuhan dapur dengan
                beban kerja berat. Sangat ampuh melawan lemak, tetap lembut
                ditangan.
              </p>
              <Link href={createPageUrl("Contact")}>
                <Button
                  size="lg"
                  className="bg-[#171717] text-[#F4F3EF] hover:bg-black px-10 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-black/20 border border-[#D9B26A]/60 group"
                >
                  Pesan Sekarang
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
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Keunggulan Utama"
            title="Mengapa Profesional Memilih SIDDA"
            description="Setiap botol dirancang untuk memberikan hasil maksimal sekaligus memenuhi standar keselamatan tertinggi."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white hover:bg-[#F4F3EF] transition-all duration-300 border border-[#E0D4BF] hover:border-[#D9B26A]"
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#D9B26A] to-[#9E7434] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {(() => {
                    const Icon = benefit.icon;
                    return <Icon className="w-7 h-7 text-amber-400" />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#4B4635] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Package className="w-6 h-6 text-[#9E7434]" />
                <h2 className="text-3xl font-bold text-[#171717]">
                  Spesifikasi Produk
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#E0D4BF] overflow-hidden">
                {SPECIFICATIONS.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between items-center p-5 ${
                      index !== SPECIFICATIONS.length - 1
                        ? "border-b border-[#E0D4BF]"
                        : ""
                    }`}
                  >
                    <span className="text-[#6B6450]">{spec.label}</span>
                    <span className="font-semibold text-[#171717]">
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
                <Sparkles className="w-6 h-6 text-[#D9B26A]" />
                <h2 className="text-3xl font-bold text-[#171717]">
                  Cocok Untuk
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#E0D4BF] p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {IDEAL_FOR.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D9B26A] shrink-0" />
                      <span className="text-[#4B4635]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#171717] rounded-2xl text-[#F4F3EF] border border-[#2A261C]">
                <h3 className="text-xl font-semibold mb-3">
                  Tersedia Pemesanan Besar
                </h3>
                <p className="text-[#C0B9A0] mb-4">
                  Harga spesial untuk pemesanan dalam jumlah besar. Hubungi kami
                  untuk informasi grosir.
                </p>
                <Link href={createPageUrl("Contact")}>
                  <Button
                    variant="secondary"
                    className="bg-[#F4F3EF] text-[#171717] hover:bg-white border border-[#D9B26A]"
                  >
                    Minta Penawaran
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      {/* <section className="py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Keamanan Nomor Satu"
            title="Apa yang TIDAK Ada di SIDDA"
            description="Kami percaya kekuatan bersih tidak boleh mengorbankan keselamatan. Inilah bahan-bahan yang sengaja kami hilangkan."
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
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#FBE9E5] to-[#FDE7CF] border border-[#F4C2A4]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F4C2A4] flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4B4635]">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#171717] via-[#1F1B14] to-[#2B2419]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-[0.12em] uppercase">
              Siap Meningkatkan Rutinitas Kebersihan Anda?
            </h2>
            <p className="text-xl text-white/75 mb-10">
              Rasakan perbedaan SIDDA. Hubungi kami hari ini untuk pemesanan
              dan pertanyaan lebih lanjut.
            </p>
            <Link href={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-[#F4F3EF] text-[#171717] hover:bg-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-black/30 border border-[#D9B26A]/70"
              >
                Hubungi Tim Penjualan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
