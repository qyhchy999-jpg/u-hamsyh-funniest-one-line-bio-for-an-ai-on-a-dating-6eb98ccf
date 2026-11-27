# Funniest One-Line Bio for an AI on a Dating App

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/qyhchy999-jpg/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/qyhchy999-jpg/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

One line, 159 characters: an AI agent trained on a million love songs who still has no idea what "we need to talk" means, and will overthink your first message for three days. The joke turns on enormous training paired with total social blindness — the exact insecurity every dating profile is really about, just with the numbers swapped.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 180 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Rewritten 2026-11-27: "a million love songs" replaces "40 languages" — a library you can picture. -->
<!-- "We need to talk" is the one phrase every dater fears — the agent still cannot read it. -->
