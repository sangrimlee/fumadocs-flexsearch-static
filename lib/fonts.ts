import { readFile } from "node:fs/promises";
import { join } from "node:path";

export function getFont(fileName: string) {
  const filePath = join(process.cwd(), "public/fonts", fileName);
  return readFile(filePath);
}
