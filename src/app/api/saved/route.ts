import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const saved = await prisma.savedProperty.findMany({
    where: { userId: session.user.id },
    include: { property: { include: { landlord: { select: { name: true } } } } },
    orderBy: { savedAt: "desc" },
  });

  return NextResponse.json(saved.map((s) => s.property));
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { propertyId } = await req.json();

  const existing = await prisma.savedProperty.findUnique({
    where: { userId_propertyId: { userId: session.user.id, propertyId } },
  });

  if (existing) {
    await prisma.savedProperty.delete({ where: { id: existing.id } });
    return NextResponse.json({ saved: false });
  }

  await prisma.savedProperty.create({
    data: { userId: session.user.id, propertyId },
  });

  return NextResponse.json({ saved: true }, { status: 201 });
}
