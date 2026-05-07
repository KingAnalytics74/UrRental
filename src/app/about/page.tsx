import Link from "next/link";
import {
  ShieldCheck,
  Ban,
  Banknote,
  Users,
  ArrowRight,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Building2,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E2A4A] to-[#1A56DB] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">About UrRentals</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We&apos;re on a mission to fix Nigeria&apos;s broken rental market — one verified listing at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1E2A4A] mb-5">The Problem We&apos;re Solving</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nigeria&apos;s rental market is worth over $20 billion annually — yet it remains plagued by fraud, exploitation, and a complete lack of transparency. Over 70% of urban Nigerians rent, but millions lose money every year to fake listings, dishonest agents, and hidden fees.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tenants pay multiple agent fees (sometimes exceeding a full month&apos;s rent) just to view a property that may not even exist. Landlords have no reliable way to verify who they&apos;re renting to. The entire system is broken, offline-first, and resistant to change.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                UrRentals is the digital infrastructure Nigeria&apos;s rental market has been missing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: "Verified Identities", desc: "NIN checks for both landlords and tenants", color: "bg-blue-50 text-[#1A56DB]" },
                { icon: Ban, label: "No Agents", desc: "Direct connection between landlord and tenant", color: "bg-emerald-50 text-emerald-600" },
                { icon: Banknote, label: "Transparent Fees", desc: "What you see is what you pay", color: "bg-orange-50 text-orange-600" },
                { icon: Users, label: "Community Trust", desc: "Ratings and reviews on every profile", color: "bg-purple-50 text-purple-600" },
              ].map((f) => (
                <div key={f.label} className="bg-gray-50 p-5 rounded-2xl">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${f.color}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-[#1E2A4A] text-sm mb-1">{f.label}</div>
                  <div className="text-xs text-gray-500">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#1E2A4A] mb-4">How UrRentals Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A simple, secure process from signup to move-in.</p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Sign Up & Verify", desc: "Create an account as a landlord or tenant. Complete our two-layer identity verification using your NIN, BVN, and a utility bill. This takes less than 10 minutes." },
              { step: "2", title: "List or Search", desc: "Landlords create detailed, photo-verified property listings — free of charge. Tenants browse properties filtered by city, price range, type, and verification status." },
              { step: "3", title: "Connect Directly", desc: "Tenants message verified landlords in-platform. No phone numbers handed to strangers, no agent intermediaries. All communication is secure and logged." },
              { step: "4", title: "Visit & Agree", desc: "Schedule viewings directly. Negotiate terms. Use our optional escrow service for secure rent payment. Move in with confidence." },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-[#1A56DB] text-white rounded-xl flex items-center justify-center text-lg font-extrabold flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#1E2A4A] mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E2A4A] mb-4">The Opportunity</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Nigeria&apos;s rental market is massive, under-served, and ripe for disruption.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: TrendingUp, value: "$20B+", label: "Annual market size", desc: "Nigeria's total rental market with zero dominant digital players" },
              { icon: Building2, value: "20M+", label: "Lagos alone", desc: "Residents in Lagos, with rapid in-migration continuing year-on-year" },
              { icon: MapPin, value: "3 Cities", label: "Launch markets", desc: "Lagos, Abuja, and Port Harcourt — with diaspora portal to follow" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-gray-50 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-[#1A56DB] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-extrabold text-[#1A56DB] mb-1">{s.value}</div>
                <div className="font-bold text-[#1E2A4A] mb-2">{s.label}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E2A4A] mb-4">The Team</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1A56DB] to-[#1E2A4A] rounded-full flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-4">
                BB
              </div>
              <h3 className="text-xl font-extrabold text-[#1E2A4A] mb-1">Babatope Bakare</h3>
              <p className="text-[#1A56DB] font-semibold text-sm mb-3">Founder & CEO</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Data Engineer and serial founder. Founder of NextGen Code Academy. Deep community networks in Lagos, Abuja, and the diaspora. First-hand experience of Nigeria&apos;s broken rental system.
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                {["Data Analytics", "Community Networks", "Tech Education", "Nigeria Market"].map((t) => (
                  <span key={t} className="bg-blue-50 text-[#1A56DB] text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1E2A4A] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500">No hidden fees. Always.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Tenant Basic",
                price: "Free",
                desc: "Get started and browse listings",
                features: ["Browse all verified listings", "Save favourite properties", "View property details", "Identity verification (required to contact)"],
                cta: "Sign Up Free",
                href: "/auth/signup?role=tenant",
                highlight: false,
              },
              {
                title: "Tenant Verified",
                price: "₦2,000",
                priceNote: "one-time",
                desc: "Unlock full platform access",
                features: ["Everything in Basic", "Contact landlords directly", "Secure messaging", "Priority listing visibility", "Verified badge on profile"],
                cta: "Get Verified",
                href: "/auth/signup?role=tenant",
                highlight: true,
              },
              {
                title: "Landlord",
                price: "Free",
                desc: "List and manage your properties",
                features: ["Up to 3 listings free", "Verification badge", "Tenant inquiry management", "Premium listings available"],
                cta: "List Property",
                href: "/auth/signup?role=landlord",
                highlight: false,
              },
            ].map((p) => (
              <div key={p.title} className={`rounded-2xl border p-7 ${p.highlight ? "border-[#1A56DB] bg-[#1A56DB] text-white" : "border-gray-200 bg-white"}`}>
                <h3 className={`font-bold text-lg mb-1 ${p.highlight ? "text-white" : "text-[#1E2A4A]"}`}>{p.title}</h3>
                <div className={`text-3xl font-extrabold mb-1 ${p.highlight ? "text-white" : "text-[#1A56DB]"}`}>
                  {p.price}
                  {p.priceNote && <span className={`text-sm font-normal ${p.highlight ? "text-blue-200" : "text-gray-500"}`}> / {p.priceNote}</span>}
                </div>
                <p className={`text-sm mb-6 ${p.highlight ? "text-blue-200" : "text-gray-500"}`}>{p.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${p.highlight ? "text-emerald-300" : "text-emerald-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${p.highlight ? "bg-white text-[#1A56DB] hover:bg-blue-50" : "bg-[#1A56DB] text-white hover:bg-[#1340B0]"}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1E2A4A] to-[#1A56DB] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Ready to experience rental without the stress?</h2>
          <p className="text-blue-200 mb-8">Join thousands of Nigerians already on the UrRentals waitlist.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-white text-[#1A56DB] px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
