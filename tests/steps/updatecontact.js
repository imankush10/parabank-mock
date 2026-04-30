const { Given, When, Then, BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { UpdateContact } = require('../pages/updateinfopage');

setDefaultTimeout(60000);

let browser, context;
let update;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  context = await browser.newContext();
  this.page = await context.newPage();   
});

After(async function () {
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});


Given('user logs in with username {string} and password {string}', async function (username, password) {
  const login = new LoginPage(this.page);

  await login.launch('https://parabank.parasoft.com/parabank/index.htm');
  await login.enterUsername(username);
  await login.enterPassword(password);
  await login.clickLogin();

  await this.page.waitForLoadState('networkidle');

  if (await login.errorMsg.isVisible()) {
    throw new Error("Login failed - invalid username/password");
  }

  await expect(login.dashboard).toBeVisible();
});



When('user navigates to update contact info page', async function () {
  update = new UpdateContact(this.page);
  await update.navigateToUpdatePage();
});

When('updates first name {string}', async function (name) {
  await update.updateFirstName(name);
});

When('updates last name {string}', async function (name) {
  await update.updateLastName(name);
});

When('updates address {string}', async function (address) {
  await update.updateAddress(address);
});

When('updates city {string}', async function (city) {
  await update.updateCity(city);
});

When('updates state {string}', async function (state) {
  await update.updateState(state);
});

When('updates zip code {string}', async function (zip) {
  await update.updateZipCode(zip);
});

When('updates phone number {string}', async function (phone) {
  await update.updatePhone(phone);
});

When('clicks update button', async function () {
  await update.clickUpdate();


  await this.page.waitForLoadState('networkidle');
});

Then('should see update success message {string}', async function (message) {
  // handle error first
if (await update.errorMsg.isVisible()) {
  throw new Error("Update failed");
}


Then('should see update success message {string}', async function (message) {

  const success = this.page.getByRole('heading', { name: 'Profile Updated' });
  const error = this.page.getByRole('heading', { name: 'Error!' });

  await this.page.waitForLoadState('networkidle');

  if (await error.isVisible()) {
    throw new Error("Update failed");
  }

  await expect(success).toBeVisible();
});
});