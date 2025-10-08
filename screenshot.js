const puppeteer = require('puppeteer');

(async () => {
  // Change this URL if your dev server runs on a different port
  const url = 'http://localhost:3000/party/cards';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Adjust selector if you want to screenshot only the cards container
  // await page.screenshot({ path: 'cards.png', clip: await page.$eval('.cards-container', el => el.getBoundingClientRect()) });
  await page.screenshot({ path: 'cards.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved as cards.png');
})();
