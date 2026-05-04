"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, MapPin, X, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, CITIES, formatPrice } from "@/lib/data";

const PRICE_RANGES = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under ₦500k", min: 0, max: 500000 },
  { label: "₦500k – ₦1M", min: 500000, max: 1000000 },
  { label: "₦1M – ₦2M", min: 1000000, max: 2000000 },
  { label: "₦2M – ₦5M", min: 2000000, max: 5000000 },
  { label: "Above ₦5M", min: 5000000, max: Infinity },
];

const PROPERTY_TYPES = ["apartment", "house", "duplex", "self-contain", "studio"];

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let result = [...PROPERTIES];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.title.toLowerCase().includes(q) || p.area.toLowerCase().includes(q)
      );
    }

    if (city) result = result.filter((p) => p.city === city);
    if (type) result = result.filter((p) => p.type === type);
    if (verifiedOnly) result = result.filter((p) => p.landlordVerified);

    const range = PRICE_RANGES[priceRange];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "featured") result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return result;
  }, [search, city, type, priceRange, verifiedOnly, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setCity("");
    setType("");
    setPriceRange(0);
    setVerifiedOnly(false);
  };

  const hasActiveFilters = search || city || type || priceRange > 0 || verifiedOnly;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page header */}
      <div className="bg-gradient-to-r from-[#1E2A4A] to-[#1A56DB] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold mb-2">Browse Properties</h1>
          <p className="text-blue-200 flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Lagos · Abuja · Port Harcourt
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#1A56DB] transition-colors">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search by title or area…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent text-[#1E2A4A] placeholder-gray-400"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
              showFilters || hasActiveFilters
                ? "bg-[#1A56DB] border-[#1A56DB] text-white"
                : "bg-white border-gray-200 text-[#1E2A4A] hover:border-[#1A56DB]"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-white/20 rounded-full text-xs flex items-center justify-center">
                {[search, city, type, priceRange > 0, verifiedOnly].filter(Boolean).length}
              </span>
            )}
          </button>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-500">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-[#1E2A4A] bg-transparent outline-none pr-5 appearance-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-0 top-0.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Expandable filters */}
        {showFilters && (
          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1E2A4A] outline-none focus:border-[#1A56DB]"
                >
                  <option value="">All Cities</option>
                  {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Property Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1E2A4A] outline-none focus:border-[#1A56DB] capitalize"
                >
                  <option value="">All Types</option>
                  {PROPERTY_TYPES.map((t) => <option key={t} value={t} className="capitalize">{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1E2A4A] outline-none focus:border-[#1A56DB]"
                >
                  {PRICE_RANGES.map((r, i) => <option key={i} value={i}>{r.label}</option>)}
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <label className="flex items-center gap-2 cursor-pointer mb-1">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#1A56DB]"
                  />
                  <span className="text-sm font-medium text-[#1E2A4A]">Verified landlords only</span>
                </label>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-2 text-sm text-red-500 hover:text-red-700 font-medium text-left"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-[#1E2A4A]">{filtered.length}</span> propert{filtered.length === 1 ? "y" : "ies"} found
          </p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="text-xs text-[#1A56DB] hover:underline font-medium flex items-center gap-1">
              <X className="w-3 h-3" /> Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="font-bold text-[#1E2A4A] mb-2">No properties found</h3>
            <p className="text-gray-500 text-sm mb-4">Try adjusting your filters or search terms</p>
            <button onClick={clearFilters} className="text-[#1A56DB] font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
