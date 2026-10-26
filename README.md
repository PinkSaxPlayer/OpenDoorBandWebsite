# Open Door Band website

This repository contains a static website ready for GitHub Pages from the **main** branch, **/ (root)** folder. No build or dependency installation is required to publish it.

## Enable GitHub Pages

1. Commit and push these changes to `main` on GitHub.
2. Open the repository’s **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main** and **/ (root)**, then click **Save**.

GitHub will show the deployment status and published URL in the Pages settings. The expected address is https://pinksaxplayer.github.io/OpenDoorBandWebsite/ .

## Files and editing

- `index.html` is the home page. All other `.html` pages, `styles.css`, and `app.js` are alongside it.
- `assets/` contains the images and font.
- `.nojekyll` tells GitHub Pages to serve the static files without Jekyll processing.
- `open-door-band/` keeps the historical import tools and blog source data.
- `skills/` contains the local blog maintenance instructions.

Edit the root HTML, CSS, and JavaScript directly. Keep local links relative (for example, `about.html` and `assets/photo.jpg`) so they work under the repository URL.

Run `node open-door-band/check.mjs` from the repository root to check pages, links, anchors, HTML structure, accordions, and image files.

The original Squarespace HTML exports are currently absent from this working copy. The historical generator requires those exports and overwrites generated HTML; it is not needed for GitHub Pages deployment. See `open-door-band/README.md` for details.

Google Calendar and the interest form require an internet connection and retain their existing Google access settings.
