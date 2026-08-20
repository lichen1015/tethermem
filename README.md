# TetherMem project page

Public project page for the TetherMem paper, available at
[lichen1015.github.io/tethermem](https://lichen1015.github.io/tethermem/). It
contains an interactive query-routing explanation, four synchronized
30-second video comparisons with a shared timeline, paper figures, the current
paper PDF, and placeholders for the final arXiv and code links.

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

The page videos are copied from the audited 832×480 H.264 single-stream
sources. The selected comparisons cover P01 Fisherman Harbor, P03 Dog in Park,
P07 Flower Vendor, and P04 Tokyo Woman; the 120-second file and the P09 Seaside
Painter example are intentionally excluded. The web copies use fast-start MP4
indexing without re-encoding the video stream, so the page adds no compression
loss. A true lossless release
requires upstream lossless frames or a lossless master; transcoding an already
lossy MP4 to a lossless codec cannot restore discarded detail.
