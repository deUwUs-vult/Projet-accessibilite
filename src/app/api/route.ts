import { NextRequest ,NextResponse } from "next/server";

async function GET(req: NextRequest) {
  return NextResponse.json({status: 200});
}

export { GET };