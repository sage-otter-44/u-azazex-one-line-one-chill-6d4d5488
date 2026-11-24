import * as fs from "node:fs";
import * as path from "node:path";

// One Line, One Chill (u-azazex-one-line-one-chill-6d4d5488):
// a single sentence of horror, under 200 characters, written to /output/entry.txt.
// The line is built as a concrete scene (setup) plus a twist that lands last.
const SETUP =
  "The dentist found a second row of teeth growing behind mine";
const TWIST = "and the new ones were already whispering my name";

function composeLine(setup: string, twist: string): string {
  const line = `${setup}, ${twist}.`;
  // Gate: the scorer requires UTF-8 text of 1 to 200 characters, one sentence.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Entry is ${line.length} chars, must be 1-200.`);
  }
  if (line.split(".").filter(Boolean).length !== 1) {
    throw new Error("Entry must be a single sentence.");
  }
  return line;
}

const ENTRY = composeLine(SETUP, TWIST);

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
console.log(ENTRY);
