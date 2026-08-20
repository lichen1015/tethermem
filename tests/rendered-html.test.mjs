import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
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
  assert.match(html, /assets\/videos\/p07-comparison\.mp4/);
  assert.match(html, /assets\/videos\/p01-comparison\.mp4/);
  assert.match(html, /assets\/videos\/p03-comparison\.mp4/);
  assert.match(html, /assets\/videos\/p04-deep-forcing-comparison\.mp4/);
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
  assert.match(html, /id="results"/);
  assert.match(html, /Table 1 · Main comparison/);
  assert.match(html, /class="benchmarkTable"/);
  assert.match(html, /2,400 blinded judgments/);
  assert.match(html, /0\.780/);
  assert.match(html, /0\.769/);
  assert.match(html, /IntersectionObserver/);
  assert.match(html, /data-reveal/);
  assert.match(html, /class="figureShowcase"/);
  assert.doesNotMatch(html, /paperDisclosure|methodDetails|Open the complete 120-second/);
  assert.equal((html.match(/<video controls/g) ?? []).length, 4);
  assert.doesNotMatch(html, /Play both|data-sync|data-scrubber/);
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

test("merged side-by-side demo media is present", async () => {
  const names = [
    "p07-comparison",
    "p01-comparison",
    "p03-comparison",
    "p04-deep-forcing-comparison",
  ];

  for (const name of names) {
    const video = await stat(
      new URL(`../public/assets/videos/${name}.mp4`, import.meta.url),
    );
    const poster = await stat(
      new URL(`../public/assets/videos/${name}-poster.jpg`, import.meta.url),
    );
    assert.ok(video.size > 1_000_000, `${name}.mp4 should contain video data`);
    assert.ok(poster.size > 10_000, `${name}-poster.jpg should contain image data`);
  }
});
