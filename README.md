# TetherMem project page

Public project page for the TetherMem paper, available at
[lichen1015.github.io/tethermem](https://lichen1015.github.io/tethermem/). It
contains an interactive query-routing explanation, four pre-aligned 30-second
side-by-side comparison videos, a web-native rendering of the paper's Table 1,
scroll-revealed paper figures, the current paper PDF, and placeholders for the
final arXiv and code links.

## Local preview

Open `public/index.html` in a browser. For the most accurate video playback,
serve the `public/` folder with any small static web server.

## Publish with GitHub Pages

Push this folder to the `main` branch of
[`lichen1015/tethermem`](https://github.com/lichen1015/tethermem). The included
`.github/workflows/deploy-pages.yml` publishes `public/` through GitHub Pages.

The public page is plain static HTML, so GitHub Pages does not need a server or
a JavaScript build step. The optional `app/` directory is a component version;
GitHub Pages publishes only `public/`.

## Before public release

- Replace the temporary paper PDF with the final arXiv PDF.
- Insert the arXiv and code URLs in `public/index.html` (and `app/page.tsx` if
  retaining the component version).
- Replace the placeholder BibTeX entry after arXiv assigns the identifier.
- Confirm public-release permission for every video, logo, and baseline name.
- If traffic or the video catalog grows, move videos to object storage and keep
  the HTML/figures on GitHub Pages.

## Video quality

The selected comparisons cover P01 Fisherman Harbor, P03 Dog in Park, P07
Flower Vendor, and P04 Tokyo Woman; the 120-second file and the P09 Seaside
Painter example are intentionally excluded. Each web demo combines two audited
832×480 H.264 sources into one 1664×480 side-by-side H.264 file with fast-start
indexing and a high-quality CRF 17 delivery encode. The original single-stream
sources remain in the repository. A true lossless release requires upstream
lossless frames or a lossless master; transcoding an already lossy MP4 to a
lossless codec cannot restore discarded detail.
