const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const By = webdriver.By

webdriver.promise.USE_PROMISE_MANAGER = false;

const main = async () => {
    const options = new chrome.Options()
    if(process.env.HEADLESS_CHROME) {
      options.addArguments(["--headless", "--window-size=800,600", "--no-sandbox", "--disable-gpu"])
    }

    const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build()

    const pageUrl = 'https://www.google.com';
    await driver.get(pageUrl)
    driver.quit()
}

module.exports = {
    main
}
