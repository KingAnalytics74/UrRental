"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Plus,
  Eye,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Edit3,
  Trash2,
  Home,
  LogOut,
  Bell,
  Settings,
} from "lucide-react";
import { PROPERTIES, formatPrice } from "@/lib/data";

const MOCK_LISTINGS = PROPERTIES.slice(0, 3).map((p, i) => ({
  ...p,
  views: [124, 89, 43][i],
  inquiries: [12, 7, 3][i],
  status: (["active", "active", "pending"] as const)[i],
}));

const MOCK_MESSAGES = [
  { id: 1, name: "Amaka Okonkwo", property: "3-Bedroom Lekki Apartment", time: "2h ago", preview: "Hi, I'd like to schedule a viewing…", unread: true },
  { id: 2, name: "Chidi Eze", property: "3-Bedroom Lekki Apartment", time: "5h ago", preview: "Is the apartment still available?", unread: true },
  { id: 3, name: "Funmi Adeyemi", property: "4-Bedroom GRA Duplex", time: "1d ago", preview: "Thank you for the quick response!", unread: false },
];

export default function LandlordDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "listings" | "messages" | "add">("overview");

  const totalViews = MOCK_LISTINGS.reduce((sum, l) => sum + l.views, 0);
  const totalInquiries = MOCK_LISTINGS.reduce((sum, l) => sum + l.inquiries, 0);

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
            <div className="w-10 h-10 bg-[#1A56DB] rounded-full flex items-center justify-center font-bold text-sm">BB</div>
            <div>
              <div className="font-semibold text-sm">Babatope Bakare</div>
              <div className="text-xs text-blue-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Landlord
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { key: "overview", icon: TrendingUp, label: "Overview" },
            { key: "listings", icon: Building2, label: "My Listings" },
            { key: "messages", icon: MessageCircle, label: "Messages", badge: 2 },
            { key: "add", icon: Plus, label: "Add Property" },
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
              {badge && (
                <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-bold text-[#1E2A4A] text-lg capitalize">
            {activeTab === "add" ? "Add New Property" : activeTab === "overview" ? "Dashboard" : activeTab === "listings" ? "My Listings" : "Messages"}
          </h1>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 bg-[#1A56DB] rounded-full flex items-center justify-center text-white font-bold text-xs">BB</div>
          </div>
        </header>

        <main className="p-6">
          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Active Listings", value: "2", icon: Building2, color: "bg-blue-50 text-[#1A56DB]" },
                  { label: "Total Views", value: totalViews.toString(), icon: Eye, color: "bg-purple-50 text-purple-600" },
                  { label: "Inquiries", value: totalInquiries.toString(), icon: MessageCircle, color: "bg-emerald-50 text-emerald-600" },
                  { label: "Pending Review", value: "1", icon: Clock, color: "bg-amber-50 text-amber-600" },
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

              {/* Verification banner */}
              <div className="bg-gradient-to-r from-[#1E2A4A] to-[#1A56DB] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold">Account Verified</div>
                    <div className="text-blue-200 text-sm">NIN & property ownership confirmed</div>
                  </div>
                </div>
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">VERIFIED</span>
              </div>

              {/* Recent listings */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#1E2A4A]">Recent Listings</h2>
                  <button onClick={() => setActiveTab("listings")} className="text-sm text-[#1A56DB] font-medium hover:underline">View all</button>
                </div>
                <div className="space-y-3">
                  {MOCK_LISTINGS.slice(0, 2).map((l) => (
                    <div key={l.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={l.images[0]} alt={l.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#1E2A4A] text-sm truncate">{l.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{l.area}, {l.city}</div>
                        <div className="text-sm font-bold text-[#1A56DB] mt-1">{formatPrice(l.price)}/yr</div>
                      </div>
                      <div className="text-right text-xs text-gray-500 flex-shrink-0">
                        <div className="flex items-center gap-1 mb-1"><Eye className="w-3 h-3" /> {l.views} views</div>
                        <div className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {l.inquiries} inquiries</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── LISTINGS ── */}
          {activeTab === "listings" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">{MOCK_LISTINGS.length} listings</p>
                <button onClick={() => setActiveTab("add")} className="flex items-center gap-1.5 bg-[#1A56DB] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#1340B0] transition-colors">
                  <Plus className="w-4 h-4" /> Add Property
                </button>
              </div>

              {MOCK_LISTINGS.map((l) => (
                <div key={l.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.images[0]} alt={l.title} className="w-full sm:w-32 h-32 sm:h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-[#1E2A4A] text-sm leading-snug">{l.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                        l.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                      }`}>
                        {l.status === "active" ? "Active" : "Pending"}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">{l.area}, {l.city}</div>
                    <div className="text-base font-bold text-[#1A56DB] mb-3">{formatPrice(l.price)}<span className="text-xs font-normal text-gray-500">/yr</span></div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{l.views} views</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{l.inquiries} inquiries</span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2 sm:justify-start">
                    <button className="flex items-center gap-1.5 text-xs font-medium text-[#1A56DB] bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-medium text-red-500 bg-red-50 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" /> Delete
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

          {/* ── ADD PROPERTY ── */}
          {activeTab === "add" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Property Title</label>
                    <input type="text" placeholder="e.g. Modern 3-Bedroom Apartment in Lekki" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">City</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]">
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Area / Neighbourhood</label>
                    <input type="text" placeholder="e.g. Lekki Phase 1" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Property Type</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]">
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Duplex</option>
                      <option>Self-Contain</option>
                      <option>Studio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Annual Rent (₦)</label>
                    <input type="number" placeholder="1,500,000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Bedrooms</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]">
                      {[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Bathrooms</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB]">
                      {[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Description</label>
                    <textarea rows={4} placeholder="Describe your property — features, nearby landmarks, access routes…" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1A56DB] resize-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#1E2A4A] mb-1.5">Property Images</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#1A56DB] transition-colors cursor-pointer">
                      <Building2 className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to upload photos</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl flex gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700">Your listing will be reviewed within 24 hours before going live. You&apos;ll receive a notification once approved.</p>
                </div>

                <button className="w-full bg-[#1A56DB] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#1340B0] transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" /> Submit Listing for Review
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
