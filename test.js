const puppeteer = require('puppeteer');
const [, , URL] = process.argv;
console.log(process.argv);

// This example fetches the title of the website specified as the 1st argument
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  await page.waitFor(1000);
  const title = await page.$eval('title', elm => elm.textContent);
  console.log('Website title:', title);
  await browser.close();
})();
