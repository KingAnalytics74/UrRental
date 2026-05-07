import { notFound } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  Bath,
  Bed,
  MapPin,
  CheckCircle2,
  Share2,
  Heart,
  Maximize2,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, formatPrice } from "@/lib/data";

const PropertyMap = dynamic(() => import("@/components/PropertyMap"), { ssr: false });

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ id: p.id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) notFound();

  const related = PROPERTIES.filter((p) => p.id !== id && p.city === property.city).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Back */}
        <Link
          href="/properties"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1A56DB] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images */}
            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={property.images[0]}
                alt={property.title}
                className="col-span-2 w-full h-72 object-cover"
              />
              {property.images.slice(1).map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={img} alt={`View ${i + 2}`} className="w-full h-44 object-cover" />
              ))}
            </div>

            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-50 text-[#1A56DB] text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                    {property.type}
                  </span>
                  {property.landlordVerified && (
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Listing
                    </span>
                  )}
                  {property.featured && (
                    <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-2xl font-extrabold text-[#1E2A4A]">{property.title}</h1>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-2">
                  <MapPin className="w-4 h-4" />
                  {property.area}, {property.city}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors" title="Share">
                  <Share2 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors" title="Save">
                  <Heart className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-2xl p-5">
              <div className="text-center">
                <Bed className="w-5 h-5 text-[#1A56DB] mx-auto mb-1" />
                <div className="font-bold text-[#1E2A4A]">{property.bedrooms}</div>
                <div className="text-xs text-gray-500">Bedroom{property.bedrooms !== 1 ? "s" : ""}</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <Bath className="w-5 h-5 text-[#1A56DB] mx-auto mb-1" />
                <div className="font-bold text-[#1E2A4A]">{property.bathrooms}</div>
                <div className="text-xs text-gray-500">Bathroom{property.bathrooms !== 1 ? "s" : ""}</div>
              </div>
              <div className="text-center">
                <Maximize2 className="w-5 h-5 text-[#1A56DB] mx-auto mb-1" />
                <div className="font-bold text-[#1E2A4A]">{property.size ?? "—"}</div>
                <div className="text-xs text-gray-500">m² Area</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-bold text-[#1E2A4A] mb-3">About This Property</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{property.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-bold text-[#1E2A4A] mb-3">Amenities & Features</h2>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-1.5 bg-blue-50 text-[#1E2A4A] text-xs font-medium px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A56DB]" />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-bold text-[#1E2A4A] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1A56DB]" />
                Location
              </h2>
              <div className="h-72 w-full rounded-2xl overflow-hidden border border-gray-100">
                <PropertyMap lat={property.lat} lng={property.lng} title={property.title} area={property.area} />
              </div>
              <p className="text-xs text-gray-400 mt-2">Approximate location — exact address shared after contact</p>
            </div>

            {/* Posted date */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              Posted: {new Date(property.postedDate).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>

          {/* Right column - Booking card */}
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="text-2xl font-extrabold text-[#1A56DB] mb-1">
                {formatPrice(property.price)}
                <span className="text-sm font-normal text-gray-500">/year</span>
              </div>
              <div className="text-xs text-gray-500 mb-5">
                ≈ {formatPrice(Math.round(property.price / 12))}/month
              </div>

              {/* Landlord */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl mb-5">
                <div className="w-10 h-10 bg-[#1A56DB] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {property.landlordName.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1E2A4A] text-sm truncate">{property.landlordName}</div>
                  <div className="text-xs text-gray-500">Property Owner</div>
                </div>
                {property.landlordVerified && (
                  <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                )}
              </div>

              <div className="space-y-3">
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center gap-2 w-full bg-[#1A56DB] hover:bg-[#1340B0] text-white py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message Landlord
                </Link>
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center gap-2 w-full border border-[#1A56DB] text-[#1A56DB] hover:bg-blue-50 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Request Callback
                </Link>
              </div>

              <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl flex gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  Never pay an agent. All transactions on UrRentals are directly between you and the landlord.
                </p>
              </div>

              <div className="mt-4 space-y-2 text-xs text-gray-500">
                {["No agent fees", "Verified landlord", "Secure communication", "Fraud protected"].map((i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related properties */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-[#1E2A4A] mb-6">More in {property.city}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
