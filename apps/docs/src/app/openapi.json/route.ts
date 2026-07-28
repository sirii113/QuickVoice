<<<<<<< HEAD
import { buildQuickVoiceOpenApi } from "@/lib/openapi";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildQuickVoiceOpenApi(), {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
    },
  });
}
=======
import { buildQuickVoiceOpenApi } from "@/lib/openapi";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildQuickVoiceOpenApi(), {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
    },
  });
}
>>>>>>> origin/main
