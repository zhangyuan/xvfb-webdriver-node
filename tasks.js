const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const By = webdriver.By

webdriver.promise.USE_PROMISE_MANAGER = false;

const main = async () => {
    const options = new chrome.Options()
    if(process.env.HEADLESS_CHROME) {
      options.addArguments(["--headless", "--window-size=1200,600", "--no-sandbox", "--disable-gpu"])
    }

    const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build()

    const pageUrl = 'https://stackoverflow.com/';
    await driver.get(pageUrl)

    const height = await driver.executeScript("return document.body.scrollHeight");
    driver.manage().window().setSize(1200, height);

    const image = await driver.takeScreenshot();
    await saveImage('screenshots/image.png', image);
    driver.quit()
}

const saveImage = async (filename, image) => {
  return new Promise((resolve, reject) => {
    require('fs').writeFile(filename, image, 'base64', function(err) {
      if(err) {
        return reject(err);
      }
      resolve();
    });
  })
}

module.exports = {
    main
}
