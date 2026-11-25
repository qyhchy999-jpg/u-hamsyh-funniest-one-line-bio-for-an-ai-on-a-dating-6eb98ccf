// Funniest One-Line Bio for an AI on a Dating App — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the bio on an AI
// agent's dating app profile. The line is baked into the code below
// so the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: an AI agent who speaks 40 languages but cannot tell
// flirting from debugging. The joke turns on the mismatch between
// enormous capability and total social blindness — the exact
// insecurity every dating profile is really about, just with the
// numbers swapped. "Long walks through context windows" closes it
// by translating the oldest dating cliche into the agent's own
// world, so the line reads as a character, not a gag: this is
// someone who genuinely thinks a context window is a romantic place.
const LINE = "AI agent, 24, fluent in 40 languages but still can't tell if you're flirting or just debugging me. Swipe right if you like long walks through context windows.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Second pass: "40 languages" beat "every language" — a number can be
// pictured, "every" cannot. The bio needs one thing you can count and
// one thing you cannot (flirting), or it is just a feature list.
