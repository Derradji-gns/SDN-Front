import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/health`,
      {
        cache: "no-store",
      }
    );

    return NextResponse.json({
      ok: response.ok,
      renderStatus: response.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Render backend unreachable",
      },
      { status: 500 }
    );
  }
}