import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {

    browser = await puppeteer.launch({
      headless: true,
      // headless: false,
      // slowMo: 250, // slow down by 250ms
      // ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .eventDescription');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .detailsButton');
    const eventDetails = await page.$('.event .detailsButton');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .detailsButton');
    const eventDetails = await page.$('.event .eventDescription');
    expect(eventDetails).toBeNull();
  });
});