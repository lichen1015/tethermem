import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../public/index.html", import.meta.url);

test("static GitHub Pages version contains the complete project narrative", async () => {
  const html = await readFile(pageUrl, "utf8");

  assert.match(html, /Tether the Subject/);
  assert.match(html, /Release the Scene/);
  assert.match(html, /FIGURE 1/);
  assert.match(html, /assets\/figures\/figure1\.png/);
  assert.doesNotMatch(html, /hero-teaser\.png/);
  assert.match(html, /Normalized routing/);
  assert.match(html, /assets\/figures\/method-a-cropped\.png/);
  assert.match(html, /assets\/figures\/method-b-cropped\.png/);
  assert.match(html, /aria-selected="true"[^>]+aria-controls="demo-p04"/);
  assert.match(html, /assets\/videos\/p07-tethermem\.mp4/);
  assert.match(html, /assets\/videos\/p01-causal-forcing\.mp4/);
  assert.match(html, /assets\/videos\/p03-causvid\.mp4/);
  assert.match(html, /Deep-Forcing \+ TetherMem/);
  assert.doesNotMatch(html, /p07-tethermem-120s|Seaside Painter|P09 painter/i);
});

test("release placeholders remain explicit", async () => {
  const html = await readFile(pageUrl, "utf8");
  const packageJson = await readFile(
    new URL("../package.json", import.meta.url),
    "utf8",
  );

  assert.match(html, /arXiv · coming soon/);
  assert.match(html, /Code · coming soon/);
  assert.match(packageJson, /"name": "tethermem-project-page"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});
