
 const assert = require('assert');
 const {Given,When,Then} = require('cucumber');
 const path = requite('path');
 const {ServiceBuilder} = require ('selenium-webdriver/chrome');
 const {Builder, By, Key, untill} = require('selenium-webdriver');
 const pathDriver = "C:/Users/Hamilton/Desktop/teste/html/projetoCSSHiring/pastaConteudoTestes/afdsthename/driver/chromedriver";
 const serviceBuilder = new ServiceBuilder(pathDriver);
 const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

 Given('I have {string} clients in my database', function (string) {
    console.log("inseri os dados na base de dados!!");
  });


  When('I access the home webpage', async function () {
    await driver.get('https://localhost:3000');
    await driver.sleep('1000');
});


  Then('see the list of {string} itens', async function (string) {
    assert(await driver.findElement(By.tagName('tr')).length).toBeEqual(10);
});
