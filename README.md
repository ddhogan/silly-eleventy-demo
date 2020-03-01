# About this project

* This is made with eleventy
* By convention, I place posts in the `posts` directory
* Eleventy looks for templates in the `_includes` directory
* the `_site` directory is re-generated on `npx @11ty/eleventy`
* to run locally, do `npx @11ty/eleventy --serve`

After making edits, run `npx @11ty/eleventy` (to build if you haven't already), and then `npm run deploy` to push to gh-pages.