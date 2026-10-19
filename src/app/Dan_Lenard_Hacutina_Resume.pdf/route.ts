import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

const fileName = "Dan_Lenard_Hacutina_Resume.pdf";

export async function GET() {
  const file = await readFile(path.join(process.cwd(), fileName));

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
