const { Given,When,Then,BeforeAll,AfterAll,Before,After,setDefaultTimeout } = require('@cucumber/cucumber');
const { expect,chromium } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage.js');
const { before } = require("node:test");

setDefaultTimeout(60000);

let login,browser,context,page;

BeforeAll(async()=>{
    browser=await chromium.launch();

})
Before(async()=>{
    context=await browser.newContext();
    page=await context.newPage();
})

Given('user navigate to parabank {string}', async (url) => {
  login = new LoginPage(page);
  await login.launch(url);
});

When('user enter username {string}', async (username) => {
  await login.enterUsername(username);
});

When('user enter password {string}', async (password) => {
  await login.enterPassword(password);
});

When('user click on login button', async () => {
  await login.clickLogin();
});

Then('user should be logged in successfully', async () => {
  await expect(login.dashboard).toBeVisible();
});
