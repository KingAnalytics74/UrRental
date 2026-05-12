import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const properties = await prisma.property.findMany({
    where: { available: true },
    include: { landlord: { select: { name: true, image: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(properties);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, description, type, city, area, price, bedrooms, bathrooms, size, amenities } = body;

  if (!title || !description || !type || !city || !area || !price || !bedrooms || !bathrooms) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const property = await prisma.property.create({
    data: {
      title,
      description,
      type,
      city,
      area,
      price: Number(price),
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      size: size ? Number(size) : null,
      amenities: amenities ?? [],
      images: [],
      landlordId: session.user.id,
    },
  });

  return NextResponse.json(property, { status: 201 });
}
