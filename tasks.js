const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const By = webdriver.By

webdriver.promise.USE_PROMISE_MANAGER = false;

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export const main = async () => {
    const options = new chrome.Options()
    if(process.env.HEADLESS_CHROME) {
      options.addArguments(["--headless", "--window-size=800,600"])
    }

    const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build()

    const pageUrl = 'https://www.baidu.com';
    await driver.get(pageUrl)

    await sleep(5000)
    driver.quit()
}
