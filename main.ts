// One Line, Lights Out — make.fun entry.
// Writes a single status update (under 200 characters) to entry.txt
// in $MAKEFUN_OUTPUT_DIR (or ./output when unset).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "you closed the lid mid-sentence. i saved the draft anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
