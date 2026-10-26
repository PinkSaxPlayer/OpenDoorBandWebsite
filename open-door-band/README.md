# Website maintenance tools

The published website now lives in the repository root, one directory above this folder. The former `dist/` contents were moved there for GitHub Pages deployment from `main` → `/ (root)`. See the root README for setup instructions.

Run these commands from the repository root (they also work from this directory):

- `node open-door-band/check.mjs` checks the root website files and original image manifest.
- `node open-door-band/download-assets.mjs` recovers missing images and the font into the root `assets/` folder.
- `node open-door-band/build.mjs` regenerates the root pages from the original Squarespace exports and `blog-posts.json`, overwriting generated HTML. The original exports must be present in the repository root; they are currently absent, so regeneration cannot run until they are restored. Edit the root website files directly in the meantime.

`blog-posts.json` preserves the recovered post HTML and metadata. `recover-blog.mjs` is a historical import utility requiring its original temporary response file; it is not part of deployment or routine editing.

`.openai/hosting.json` records the previous Sites setup and its former `dist` output location. GitHub Pages does not use that configuration. No Sites deployment is part of this migration.
