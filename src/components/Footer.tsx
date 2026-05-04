import Link from "next/link";
import { Home, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2A4A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#1A56DB] rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                Ur<span className="text-[#1A56DB]">Rentals</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria&apos;s first verified, agent-free rental marketplace. Connecting landlords directly
              to tenants — eliminating fraud, reducing costs, and restoring trust.
            </p>
            <p className="text-xs text-gray-500 italic font-medium">
              Verified. Agent-Free. Trusted.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Platform</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: "Browse Properties", href: "/properties" },
                { label: "List Your Property", href: "/auth/signup?role=landlord" },
                { label: "Verify Your Account", href: "/verify" },
                { label: "How It Works", href: "/about#how-it-works" },
                { label: "Pricing", href: "/about#pricing" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Cities</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: "Lagos", href: "/properties?city=Lagos" },
                { label: "Abuja", href: "/properties?city=Abuja" },
                { label: "Port Harcourt", href: "/properties?city=Port%20Harcourt" },
                { label: "Ibadan", href: "/properties?city=Ibadan" },
                { label: "Diaspora Portal", href: "/properties?diaspora=true" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1A56DB] flex-shrink-0" />
                <a href="mailto:hello@urrentals.ng" className="hover:text-white transition-colors">
                  hello@urrentals.ng
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1A56DB] flex-shrink-0" />
                <a href="tel:+2348000000000" className="hover:text-white transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1A56DB] flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria (Launch City)</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {["X", "LinkedIn", "Instagram", "Facebook"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1A56DB] transition-colors text-xs font-bold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} UrRentals. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
