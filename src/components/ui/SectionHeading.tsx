"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-green-800 font-semibold text-sm tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
