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
  assert.match(html, /aria-selected="true"[^>]+aria-controls="demo-p07"/);
  assert.match(html, /assets\/videos\/p07-tethermem\.mp4/);
  assert.match(html, /assets\/videos\/p01-causal-forcing\.mp4/);
  assert.match(html, /assets\/videos\/p03-causvid\.mp4/);
  assert.match(html, /Deep-Forcing \+ TetherMem/);
  assert.match(html, /Chen Li<sup>1,2<\/sup>/);
  assert.match(html, /Peng Zhang<sup>2<\/sup>/);
  assert.match(html, /Changxin Gao<sup>1,\*<\/sup>/);
  assert.match(html, /Huazhong University of Science and Technology/);
  assert.match(html, /MiLM Plus, Xiaomi Inc\./);
  assert.match(html, /Zhang, Peng and Zhou, Hanyu/);
  assert.match(html, /76\.9%/);
  assert.match(html, /rel="canonical" href="https:\/\/lichen1015\.github\.io\/tethermem\/"/);
  assert.match(html, /data-route-mode="subject"/);
  assert.match(html, /data-route-mode="scene"/);
  assert.match(html, /data-scrubber="p07-30"/);
  assert.match(html, /Copy BibTeX/);
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
