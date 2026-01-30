"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  User,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const SUBJECT_OPTIONS = [
  { value: "general", label: "General Inquiry" },
  { value: "order", label: "Place an Order" },
  { value: "wholesale", label: "Wholesale / Bulk Orders" },
  { value: "support", label: "Product Support" },
  { value: "partnership", label: "Partnership Opportunity" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-green-900 via-green-800 to-teal-800">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400">
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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-8">
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

              <div className="mt-10 aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                  alt="Location map"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-800 to-teal-700 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you
                      shortly.
                    </p>
                    <Button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="flex items-center gap-2"
                        >
                          <User className="w-4 h-4 text-slate-400" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            handleChange("name", e.target.value)
                          }
                          required
                          className="bg-white border-slate-200 focus:border-green-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4 text-slate-400" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          className="bg-white border-slate-200 focus:border-green-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4 text-slate-400" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          className="bg-white border-slate-200 focus:border-green-800"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="flex items-center gap-2"
                        >
                          <Building2 className="w-4 h-4 text-slate-400" />
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          className="bg-white border-slate-200 focus:border-green-800"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          handleChange("subject", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-white border-slate-200">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {SUBJECT_OPTIONS.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-slate-400" />
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                        rows={6}
                        className="bg-white border-slate-200 focus:border-green-800 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-800 to-teal-700 hover:from-green-900 hover:to-teal-800 text-white py-6 text-lg font-semibold rounded-xl"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
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
