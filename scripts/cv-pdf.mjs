// Renders the print version of /cv into a real PDF file, for phones where
// window.print() is unreliable (iOS Safari, in-app browsers). Serves the
// production build from a throwaway static server, opens it in the locally
// installed Chrome with print media, and saves public/cv.pdf (+ build/cv.pdf
// when a build exists, so `predeploy` ships the fresh file).
//
//   npm run build && npm run cv:pdf

import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { copyFile, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve("build");
const out = resolve("public/cv.pdf");

if (!existsSync(join(root, "index.html"))) {
  console.error("No build/ folder — run `npm run build` first.");
  process.exit(1);
}

const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// static server with SPA fallback: any unknown path gets index.html
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(root, path);
  try {
    if (!(await stat(file)).isFile()) throw new Error();
  } catch {
    file = join(root, "index.html");
  }
  res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
  res.end(await readFile(file));
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const url = `http://127.0.0.1:${server.address().port}/cv`;

const browser = await puppeteer.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage();
  // skip the first-visit intro curtain
  await page.evaluateOnNewDocument(() => sessionStorage.setItem("ms-intro-seen", "1"));
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("print");
  await page.evaluate(async () => {
    // PrintCV fills in the contact details on this event
    window.dispatchEvent(new Event("beforeprint"));
    await document.fonts.ready;
  });
  await page.waitForSelector(".print-cv", { visible: true });

  const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true });
  await writeFile(out, pdf);
  if (existsSync(root)) await copyFile(out, join(root, "cv.pdf"));
  console.log(`Saved ${out} (${(pdf.length / 1024).toFixed(0)} KB)`);
} finally {
  await browser.close();
  server.close();
}
