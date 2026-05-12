export const runtime = "nodejs";

import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("cms");
  return Response.json({ revalidated: true });
}
