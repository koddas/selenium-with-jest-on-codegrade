const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

// This is the directory where the student's submission ends up.
// It can easily be changed to any URL.
const baseURL = 'file:///home/codegrade/student/';
// Change this to select another file to test.
const fileUnderTest = 'index.html';
const defaultTimeout = 10000;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

// Three simple functions to ease DOM navigation
const getElementByName = async (driver, name, timeout = defaultTimeout) => {
    const element = await driver.wait(until.elementLocated(By.name(name)), timeout);
    return await driver.wait(until.elementIsVisible(element), timeout);
};

const getElementById = async (driver, id, timeout = defaultTimeout) => {
    const element = await driver.wait(until.elementLocated(By.id(id)), timeout);
    return await driver.wait(until.elementIsVisible(element), timeout);
};

const getElementByTag = async (driver, tag, timeout = defaultTimeout) => {
    const element = await driver.wait(until.elementLocated(By.tagName(tag)), timeout);
    return await driver.wait(until.elementIsVisible(element), timeout);
};

// This is run before any test.
beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    // This could be done elsewhere if you want to test multiple pages
    await driver.get(baseURL + fileUnderTest);
});
    
// This is run when all tests are done. If this isn't run, the Firefox session
// lingers, so make sure it actually runs.
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

// This is a test suite. All tests in the suite share resources and the tests
// are run in sequence. You can create as may suites as you want.
describe('A Selenium test suite', () => {
    
    // This is how to describe a test within a test suite. You may define as
    // many tests as you want in a suite. You may even put other suites within
    // a suite.
    // Please note that you have to prepend each call to an asychronous
    // function with 'await', or the assertations won't work.
    test('there is a title with a predefined text', async () => {
        const title = await getElementByTag(driver, 'h1');
        const actual = await title.getText();
        expect(actual).toEqual("Hello, World!");
    });
    
    // This is just another way to name a test.
    it('the page has an element called "bananas"', async () => {
        const el = await getElementById(driver, "bananas");
        const actual = await el.getText();
        expect(actual).toEqual("I'm eating bananas.");
    });
}, defaultTimeout);

describe('A simple test suite, no Selenium involved', () => {
    it('a simple test', () => {
        expect(1).toEqual(1);
    });
});

test('A stand alone test', () => {
    expect(1).toEqual(1);
});
