"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E2A4A] to-[#1A56DB] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Get in Touch</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Questions, partnerships, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1E2A4A] mb-4">Contact Information</h2>
                <p className="text-gray-500 leading-relaxed">
                  We&apos;re building Nigeria&apos;s first verified rental marketplace and would love your input, partnership enquiries, or investor conversations.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@urrentals.ng", href: "mailto:hello@urrentals.ng" },
                  { icon: Phone, label: "Phone", value: "+234 800 000 0000", href: "tel:+2348000000000" },
                  { icon: MapPin, label: "Location", value: "Lagos, Nigeria (Launch City)", href: null },
                  { icon: MessageCircle, label: "Response Time", value: "Within 24 hours", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-blue-50 text-[#1A56DB] rounded-xl flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="font-semibold text-[#1E2A4A] hover:text-[#1A56DB] transition-colors">{c.value}</a>
                      ) : (
                        <div className="font-semibold text-[#1E2A4A]">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#1E2A4A] text-white p-6 rounded-2xl">
                <h3 className="font-bold mb-2">Investor Enquiries</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-3">
                  UrRentals is currently raising our seed round (₦15M–₦30M). We&apos;d be happy to share our full pitch deck and financials under NDA.
                </p>
                <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Babatope Bakare, Founder
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E2A4A] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#1E2A4A] mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">First Name</label>
                        <input required type="text" placeholder="Tunde" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Last Name</label>
                        <input required type="text" placeholder="Adewale" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Email</label>
                      <input required type="email" placeholder="tunde@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Subject</label>
                      <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB] text-[#1E2A4A]">
                        <option>General Inquiry</option>
                        <option>Investor Inquiry</option>
                        <option>Partnership</option>
                        <option>Technical Support</option>
                        <option>Landlord Onboarding</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Message</label>
                      <textarea required rows={5} placeholder="Tell us how we can help…" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB] resize-none" />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1A56DB] hover:bg-[#1340B0] text-white py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
