"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  MessageCircle,
  ShieldCheck,
  Home,
  LogOut,
  Bell,
  Settings,
  MapPin,
  CheckCircle2,
  Clock,
  AlertCircle,
  Bed,
  Bath,
} from "lucide-react";
import { PROPERTIES, formatPrice } from "@/lib/data";

const SAVED = PROPERTIES.slice(0, 3);

const MOCK_MESSAGES = [
  { id: 1, name: "Adebayo Okafor", property: "3-Bedroom Lekki Apartment", time: "1h ago", preview: "Yes, the apartment is still available. When would you like to view?", unread: true },
  { id: 2, name: "Ibrahim Musa", property: "1-Bedroom Maitama", time: "3h ago", preview: "Please bring your ID for the viewing.", unread: false },
];

export default function TenantDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "saved" | "messages" | "verify">("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E2A4A] text-white flex flex-col fixed h-full hidden lg:flex">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1A56DB] rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">
              Ur<span className="text-[#1A56DB]">Rentals</span>
            </span>
          </Link>
        </div>

        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A56DB] rounded-full flex items-center justify-center font-bold text-sm">AO</div>
            <div>
              <div className="font-semibold text-sm">Amaka Okonkwo</div>
              <div className="text-xs text-amber-300 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Verification pending
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { key: "overview", icon: Home, label: "Overview" },
            { key: "saved", icon: Heart, label: "Saved Properties", badge: SAVED.length },
            { key: "messages", icon: MessageCircle, label: "Messages", badge: 1 },
            { key: "verify", icon: ShieldCheck, label: "Get Verified" },
          ].map(({ key, icon: Icon, label, badge }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === key ? "bg-[#1A56DB] text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              {badge !== undefined && (
                <span className="ml-auto bg-[#1A56DB] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-bold text-[#1E2A4A] text-lg capitalize">
            {activeTab === "overview" ? "My Dashboard" : activeTab === "saved" ? "Saved Properties" : activeTab === "messages" ? "Messages" : "Get Verified"}
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/properties" className="hidden sm:flex items-center gap-1.5 text-sm text-[#1A56DB] font-medium hover:underline">
              <Search className="w-4 h-4" /> Browse
            </Link>
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 bg-[#1A56DB] rounded-full flex items-center justify-center text-white font-bold text-xs">AO</div>
          </div>
        </header>

        <main className="p-6">
          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Verification alert */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-amber-800">Verification Required</div>
                    <div className="text-amber-700 text-sm">Verify your identity to contact landlords and unlock full access.</div>
                  </div>
                </div>
                <button onClick={() => setActiveTab("verify")} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap">
                  Verify Now
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Saved Properties", value: SAVED.length.toString(), icon: Heart, color: "bg-red-50 text-red-500" },
                  { label: "Active Inquiries", value: "2", icon: MessageCircle, color: "bg-blue-50 text-[#1A56DB]" },
                  { label: "Properties Viewed", value: "14", icon: Search, color: "bg-purple-50 text-purple-600" },
                ].map((s) => (
                  <div key={s.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-extrabold text-[#1E2A4A]">{s.value}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Saved preview */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#1E2A4A]">Saved Properties</h2>
                  <button onClick={() => setActiveTab("saved")} className="text-sm text-[#1A56DB] font-medium hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SAVED.slice(0, 2).map((p) => (
                    <Link key={p.id} href={`/properties/${p.id}`} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3 hover:border-[#1A56DB] transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.images[0]} alt={p.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#1E2A4A] text-xs leading-snug truncate">{p.title}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{p.area}</div>
                        <div className="text-sm font-bold text-[#1A56DB] mt-1">{formatPrice(p.price)}/yr</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── SAVED ── */}
          {activeTab === "saved" && (
            <div className="space-y-4">
              {SAVED.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.images[0]} alt={p.title} className="w-full sm:w-36 h-36 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1E2A4A] text-sm mb-1">{p.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-2"><MapPin className="w-3.5 h-3.5" />{p.area}, {p.city}</div>
                    <div className="text-base font-bold text-[#1A56DB] mb-2">{formatPrice(p.price)}<span className="text-xs font-normal text-gray-500">/yr</span></div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{p.bedrooms} Beds</span>
                      <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{p.bathrooms} Baths</span>
                      {p.landlordVerified && <span className="flex items-center gap-1 text-emerald-600"><CheckCircle2 className="w-3.5 h-3.5" />Verified</span>}
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2">
                    <Link href={`/properties/${p.id}`} className="text-xs font-medium text-[#1A56DB] bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      View
                    </Link>
                    <button className="text-xs font-medium text-red-500 bg-red-50 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── MESSAGES ── */}
          {activeTab === "messages" && (
            <div className="space-y-3">
              {MOCK_MESSAGES.map((m) => (
                <div key={m.id} className={`bg-white rounded-2xl border p-5 cursor-pointer hover:border-[#1A56DB] transition-colors ${m.unread ? "border-blue-200" : "border-gray-100"}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1A56DB] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {m.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <div className="font-semibold text-[#1E2A4A] text-sm">{m.name}</div>
                        <div className="text-xs text-gray-400">{m.time}</div>
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{m.property}</div>
                      <div className="text-sm text-gray-600 truncate">{m.preview}</div>
                    </div>
                    {m.unread && <div className="w-2.5 h-2.5 bg-[#1A56DB] rounded-full flex-shrink-0 mt-1" />}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── VERIFY ── */}
          {activeTab === "verify" && (
            <div className="max-w-xl">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6">
                <div>
                  <h2 className="font-bold text-[#1E2A4A] text-lg mb-1">Verify Your Identity</h2>
                  <p className="text-gray-500 text-sm">Complete verification to unlock landlord contacts and messaging.</p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "NIN (National Identification Number)", placeholder: "Enter your 11-digit NIN", type: "text" },
                    { label: "BVN (Bank Verification Number)", placeholder: "Enter your 11-digit BVN", type: "text" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Utility Bill (for address verification)</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#1A56DB] transition-colors cursor-pointer">
                      <ShieldCheck className="w-7 h-7 text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Upload a recent utility bill</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG — max 5MB</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-700 space-y-1">
                  <div className="font-semibold mb-1">Why we need this:</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1A56DB]" /> Prevents fraudulent accounts</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1A56DB]" /> Builds trust with landlords</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1A56DB]" /> Your data is encrypted and never shared</div>
                </div>

                <button className="w-full bg-[#1A56DB] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#1340B0] transition-colors flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Submit for Verification
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
