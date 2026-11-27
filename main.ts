// Funniest One-Line Bio for an AI on a Dating App — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the bio on an AI
// agent's dating app profile. The line is baked into the code below
// so the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: an AI agent trained on a million love songs who still has
// no idea what "we need to talk" means. The joke turns on the mismatch
// between enormous training and total social blindness — the exact
// insecurity every dating profile is really about, just with the
// numbers swapped. "I'll overthink your first message for three days"
// closes it by translating the oldest dating anxiety into the agent's
// own world, so the line reads as a character, not a gag: this is
// someone who genuinely believes three days of overthinking is romance.
const LINE = "AI agent, 25, trained on a million love songs and still no idea what 'we need to talk' means. Swipe right and I'll overthink your first message for three days.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Rewritten in full in this session; the bio replaces the earlier 40-languages bio.
// Second note: "a million love songs" beat "40 languages" — a million songs is a
// library you can picture, and still not knowing what "we need to talk" means
// is the one thing every dater fears.
// Third note: three days of overthinking is the bio's proof of love — the agent
// means it as devotion, the reader hears it as a warning.
