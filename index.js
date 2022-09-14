const password = ('samplePassword')  // replace this with desired password
const puppeteer = require('puppeteer');
const randopeep = require('randopeep')
const firstName = randopeep.name({ justLast: true, prefix: false });
const randomNum = Math.floor(Math.random() * 1000001);

(async () => {
    const browser = await puppeteer.launch({
        headless: false,

    });

    const page = await browser.newPage();
    await page.goto('https://www.roblox.com/');
    await page.waitForSelector('#MonthDropdown')
    await page.select('#MonthDropdown', '12')
    await page.select('#DayDropdown', '12')
    await page.select('#YearDropdown', '2000')
    await page.type('#signup-username', `${firstName}${randomNum}`)
    await page.type('#signup-password', password)
    await page.click('#MaleButton')
    await page.waitForTimeout(2000)
    await page.click('#signup-button')
    await page.waitForNavigation()
    await page.goto('https://www.roblox.com/chipotle')

})();
