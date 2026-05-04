"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Search, User, LogIn } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#1A56DB] rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-[#1E2A4A]">
              Ur<span className="text-[#1A56DB]">Rentals</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1E2A4A]">
            <Link href="/properties" className="hover:text-[#1A56DB] transition-colors">
              Browse Properties
            </Link>
            <Link href="/about" className="hover:text-[#1A56DB] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#1A56DB] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/signin"
              className="flex items-center gap-1.5 text-sm font-medium text-[#1E2A4A] hover:text-[#1A56DB] transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="flex items-center gap-1.5 bg-[#1A56DB] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1340B0] transition-colors shadow"
            >
              <User className="w-4 h-4" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 space-y-1">
          <Link href="/properties" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setOpen(false)}>
            <Search className="w-4 h-4 text-[#1A56DB]" />
            Browse Properties
          </Link>
          <Link href="/about" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-sm font-medium" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link href="/auth/signin" className="text-center border border-[#1A56DB] text-[#1A56DB] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors" onClick={() => setOpen(false)}>
              Sign In
            </Link>
            <Link href="/auth/signup" className="text-center bg-[#1A56DB] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1340B0] transition-colors" onClick={() => setOpen(false)}>
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
