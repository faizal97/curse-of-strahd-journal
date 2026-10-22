// Run after every update: `node check.mjs`
// Loads the site's data files and reports anything that wasn't reviewed after the latest session,
// plus a few common slips (stale next-session date, missing portraits, inventory for unknown people).
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const window = {};
for (const f of ["content.js", "guides.js", "inventory.js"]) {
  new Function("window", readFileSync(join(here, f), "utf8"))(window);
}
const c = window.CAMPAIGN, G = window.GUIDES, INV = window.INVENTORY;

const problems = [];
const latest = Math.max(...c.sessions.map((s) => s.n));

if (c.lastUpdate.session !== latest) problems.push(`lastUpdate.session is ${c.lastUpdate.session}, latest session is ${latest}`);
if (c.leftOff.session !== latest) problems.push(`leftOff.session is ${c.leftOff.session}: the cliffhanger is from an older session`);
for (const [part, n] of Object.entries(c.reviewed)) {
  if (n < latest) problems.push(`content.js ${part} last reviewed after session ${n}`);
}
for (const p of c.party) {
  const g = G[p.id];
  if (!g) problems.push(`no tips in guides.js for ${p.id}`);
  else if (g.asOf < latest) problems.push(`guides.js ${p.id} last reviewed after session ${g.asOf} (check "tonight" first)`);
  if (!INV.people[p.id]) problems.push(`no inventory for ${p.id}`);
  if (p.img && !existsSync(join(here, p.img))) problems.push(`missing portrait ${p.img}`);
}
if (INV.asOf < latest) problems.push(`inventory.js last reviewed after session ${INV.asOf}`);
for (const id of Object.keys(INV.people)) {
  if (!c.party.some((p) => p.id === id)) problems.push(`inventory has ${id}, who is not in the party`);
}
for (const n of c.npcs) {
  if (n.img && !existsSync(join(here, n.img))) problems.push(`missing NPC portrait ${n.img}`);
}
const nums = c.sessions.map((s) => s.n).sort((a, b) => a - b);
nums.forEach((n, i) => { if (n !== i + 1) problems.push(`session numbers skip or repeat around ${n}`); });
if (c.nextSession && new Date(c.nextSession) < Date.now() - 6 * 3600e3) problems.push(`nextSession (${c.nextSession}) is in the past: set the next date, or null if unknown`);

if (problems.length) {
  console.log(`Outdated or broken (latest session: ${latest}):`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
console.log(`All parts reviewed through session ${latest}. Next session: ${c.nextSession ?? "not set yet"}`);
