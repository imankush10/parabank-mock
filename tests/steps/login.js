const { Given, When, Then, BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

setDefaultTimeout(60000);

let browser, context;

// 🔹 Launch browser once
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

// 🔹 Create page per scenario
Before(async function () {
  context = await browser.newContext();
  this.page = await context.newPage();   // ✅ IMPORTANT
});

// 🔹 Cleanup
After(async function () {
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});


// 🔹 Steps
Given('user navigate to parabank {string}', async function (url) {
  this.login = new LoginPage(this.page);
  await this.login.launch(url);
});

When('user enter username {string}', async function (username) {
  await this.login.enterUsername(username);
});

When('user enter password {string}', async function (password) {
  await this.login.enterPassword(password);
});

When('user click on login button', async function () {
  await this.login.clickLogin();
});

Then('user should be logged in successfully', async function () {
  await expect(this.login.dashboard).toBeVisible();
});