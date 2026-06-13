import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2,
  });

  console.log("Navigating to local server...");
  await page.goto('http://localhost:4040', { waitUntil: 'networkidle0' });

  console.log("Waiting for animations to settle...");
  await new Promise(resolve => setTimeout(resolve, 1500));

  const savePath = join(__dirname, '../public/og-image.png');
  await page.screenshot({ path: savePath });

  console.log('Saved OG image to', savePath);
  await browser.close();
})();
