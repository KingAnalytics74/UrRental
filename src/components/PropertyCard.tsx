import Link from "next/link";
import { Bath, Bed, MapPin, CheckCircle, Maximize2 } from "lucide-react";
import { Property, formatPrice } from "@/lib/data";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <Link href={`/properties/${property.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {property.featured && (
            <span className="bg-[#1A56DB] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-[#1E2A4A] text-xs font-medium px-2.5 py-1 rounded-full capitalize">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold text-[#1A56DB]">
            {formatPrice(property.price)}
            <span className="text-sm font-normal text-gray-500">/yr</span>
          </span>
          {property.landlordVerified && (
            <span className="flex items-center gap-1 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[#1E2A4A] text-sm leading-snug mb-2 line-clamp-2 group-hover:text-[#1A56DB] transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{property.area}, {property.city}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 text-xs text-gray-600">
          <span className="flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-[#1A56DB]" />
            {property.bedrooms} Bed{property.bedrooms !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-3.5 h-3.5 text-[#1A56DB]" />
            {property.bathrooms} Bath{property.bathrooms !== 1 ? "s" : ""}
          </span>
          {property.size && (
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#1A56DB]" />
              {property.size} m²
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
