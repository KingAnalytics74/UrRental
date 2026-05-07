import Link from "next/link";
import {
  Search,
  ShieldCheck,
  Ban,
  Banknote,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Star,
  Users,
  Building2,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, STATS } from "@/lib/data";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "Every landlord and property is identity-verified. No fake listings, no scams — ever.",
    color: "bg-blue-50 text-[#1A56DB]",
  },
  {
    icon: Ban,
    title: "Zero Agent Fees",
    desc: "Connect directly with landlords. Save up to 40% by cutting out the middleman entirely.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    desc: "See the full cost upfront. No hidden charges, no last-minute surprises.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Users,
    title: "Trusted Community",
    desc: "Both landlords and tenants are verified. Ratings and reviews build lasting trust.",
    color: "bg-purple-50 text-purple-600",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create Your Account",
    desc: "Sign up as a landlord or tenant. Verify your identity with NIN in minutes.",
  },
  {
    step: "02",
    title: "List or Browse",
    desc: "Landlords post verified listings for free. Tenants search with powerful filters by city, price, and type.",
  },
  {
    step: "03",
    title: "Connect Directly",
    desc: "Message landlords in-platform. No agents in between. View properties and agree terms directly.",
  },
  {
    step: "04",
    title: "Move In Securely",
    desc: "Complete verification checks, use our optional escrow, and move in with full confidence.",
  },
];

const TESTIMONIALS = [
  {
    name: "Amaka Okonkwo",
    role: "Tenant, Lagos",
    text: "I saved ₦450,000 in agent fees finding my Lekki apartment through UrRentals. The verification gave me total peace of mind.",
    rating: 5,
  },
  {
    name: "Tunde Adewale",
    role: "Landlord, Abuja",
    text: "My property got serious inquiries within days. No time-wasters, all tenants were pre-verified. Excellent platform.",
    rating: 5,
  },
  {
    name: "Ngozi Dike",
    role: "Tenant, Port Harcourt",
    text: "As someone in the diaspora, I was terrified of rental fraud. UrRentals made renting from abroad safe and transparent.",
    rating: 5,
  },
];

export default function HomePage() {
  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#1E2A4A] via-[#1A3A6E] to-[#1A56DB] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Nigeria&apos;s First Verified Rental Marketplace
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Find Your Home.
              <br />
              <span className="text-[#60A5FA]">No Agents. No Fraud.</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              UrRentals connects landlords directly to verified tenants across Lagos, Abuja, and Port
              Harcourt — saving you up to 40% with zero agent fees.
            </p>

            {/* Search bar */}
            <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl max-w-2xl mb-10">
              <div className="flex items-center gap-2 flex-1 px-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <select className="w-full text-[#1E2A4A] text-sm bg-transparent outline-none py-2">
                  <option value="">All Cities</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                </select>
              </div>
              <div className="h-px sm:h-auto sm:w-px bg-gray-200" />
              <div className="flex items-center gap-2 flex-1 px-3">
                <Building2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <select className="w-full text-[#1E2A4A] text-sm bg-transparent outline-none py-2">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="duplex">Duplex</option>
                  <option value="self-contain">Self-Contain</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              <Link
                href="/properties"
                className="flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-[#1340B0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              {["NIN Verified", "No Hidden Fees", "Direct Contact", "Agent-Free"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#1A56DB] mb-1">{s.value}</div>
                <div className="font-semibold text-[#1E2A4A] text-sm">{s.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] mb-4">Why UrRentals?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We built the platform millions of Nigerian renters have been waiting for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#1E2A4A] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1E2A4A] mb-2">Featured Properties</h2>
              <p className="text-gray-500">Verified listings from trusted landlords</p>
            </div>
            <Link href="/properties" className="hidden sm:flex items-center gap-1.5 text-[#1A56DB] font-semibold text-sm hover:gap-2.5 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/properties" className="inline-flex items-center gap-2 text-[#1A56DB] font-semibold">
              View all listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From sign-up to move-in in four simple steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-full h-0.5 bg-blue-100 z-0" />
                )}
                <div className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-14 h-14 bg-[#1A56DB] text-white rounded-xl flex items-center justify-center text-lg font-extrabold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#1E2A4A] mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E2A4A] mb-4">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#1E2A4A] text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-[#1E2A4A] text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SPLIT ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1E2A4A] text-white rounded-3xl p-10">
              <div className="w-12 h-12 bg-[#1A56DB] rounded-xl flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Are You a Landlord?</h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                List your property for free. Reach thousands of verified, serious tenants across Nigeria.
              </p>
              <ul className="space-y-2 mb-8">
                {["Free listing", "Verified tenant pool", "Direct communication", "Digital management"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup?role=landlord" className="inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1340B0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
                List Your Property <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[#1A56DB] text-white rounded-3xl p-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Looking to Rent?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Browse verified properties. Contact landlords directly. Save up to 40% in agent fees.
              </p>
              <ul className="space-y-2 mb-8">
                {["No agent fees", "Verified listings only", "Secure messaging", "Transparent pricing"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link href="/properties" className="inline-flex items-center gap-2 bg-white text-[#1A56DB] hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
                Browse Properties <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP BANNER ── */}
      <section className="py-16 bg-gradient-to-r from-[#1E2A4A] to-[#1A56DB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-1">Mobile App Coming Soon</h3>
                <p className="text-blue-200 text-sm">iOS and Android app in development. Web platform available now.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>MVP Launch in 90 days</span>
              </div>
              <Link href="/auth/signup" className="bg-white text-[#1A56DB] px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors">
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
