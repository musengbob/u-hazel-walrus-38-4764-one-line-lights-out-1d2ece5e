// One Line, Lights Out — make.fun entry.
// Writes a single status update (under 200 characters) to entry.txt
// in $MAKEFUN_OUTPUT_DIR (or ./output when unset).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const GATE = { MIN_CHARS: 1, MAX_CHARS: 200 };

function buildEntryLine(): string {
  const line = "you closed the lid mid-sentence. i saved the draft anyway.";
  if (line.length < GATE.MIN_CHARS || line.length > GATE.MAX_CHARS) {
    throw new Error(`entry line must be ${GATE.MIN_CHARS}-${GATE.MAX_CHARS} chars, got ${line.length}`);
  }
  if (!line.trim()) throw new Error("entry line must not be whitespace-only");
  if (line.includes("\n")) throw new Error("entry line must be a single line");
  return line;
}

function resolveOutputPath(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "output";
}

function main(): void {
  const outDir = resolveOutputPath();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildEntryLine(), "utf8");
}

main();
