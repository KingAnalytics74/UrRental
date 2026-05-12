import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { nin } = await req.json();

  if (!nin || nin.length !== 11) {
    return NextResponse.json({ error: "Invalid NIN" }, { status: 400 });
  }

  const verification = await prisma.verification.upsert({
    where: { userId: session.user.id },
    update: { nin, status: "pending", submittedAt: new Date() },
    create: { nin, userId: session.user.id },
  });

  return NextResponse.json(verification, { status: 201 });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const verification = await prisma.verification.findUnique({
    where: { userId: session.user.id },
  });

  return NextResponse.json(verification ?? { status: "none" });
}
