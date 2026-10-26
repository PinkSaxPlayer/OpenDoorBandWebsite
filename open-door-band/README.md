# Open Door Band

Rebuilt from the saved Squarespace HTML and screenshots. The original exports remain untouched in the parent folder.

## Open the website

Open `dist/index.html` in a browser. The pages, navigation, photos, font, and FAQs work directly from this folder. The embedded Google Calendar requires an internet connection and retains the original calendar permissions.

To host elsewhere, upload the **contents** of `dist/` to a static website host. No Squarespace subscription, dependency installation, or build server is needed to serve these files.

## Included

All 11 supplied pages, original branding and images, responsive layouts and mobile navigation, expandable FAQs and resource checklists, and the original calendar and music-folder links.

The Join / Contact page embeds the supplied Google Form and includes a fallback link to open it in a separate tab. Visitors submit directly to Google Forms; no email app is needed. The form owner manages questions, responder access, response storage, and notifications in Google Forms. The website does not store responses itself. An internet connection is required. Live form access and submission have not been verified in this environment.

Director’s Corner now includes all 31 published posts recovered from the public Squarespace blog, including 11 older posts absent from the original saved HTML. Each post has its own `dist/blog-*.html` page, linked from the archive. `blog-posts.json` preserves the original post HTML and metadata; the generator uses this local backup without needing Squarespace. Recovery followed pagination until no older page remained. Drafts or private posts in the Squarespace editor were not accessed.

## Editing and checks

Edit the HTML, CSS, and JavaScript in `dist/` directly. To regenerate the pages from the original exports, run `node build.mjs` from this directory. Regeneration overwrites the generated HTML. `node check.mjs` checks local links, anchors, HTML structure, resource accordions, and image files. `download-assets.mjs` recovers the original image URLs from `asset-manifest.json`; all images are already downloaded.

## Verification and publishing

Static checks passed. A browser preview was unavailable in this environment, so visual and live calendar checks remain unverified. Sites registration is recorded in `.openai/hosting.json`, but publication was blocked because Git is unavailable on this Mac without its developer tools. No live deployment was completed.
