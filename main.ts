// Weirdest Job Title: Blind Judge Showdown
// One program, one job title: it writes a single title of at most 60
// characters to the output directory, and nothing else.
// The title reads like a real HR listing until its last word twists it:
// a senior role exists for apologizing for the CEO's autocorrect.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The entry: a real-sounding title with one hilariously specific duty.
const TITLE = "Senior Apologizer for the CEO's Autocorrect";

// The gate refuses anything outside 1-60 characters, so enforce it here.
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
