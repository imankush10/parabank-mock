const { test } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { LoginPage } = require('../pages/loginPage.js');

const { Given, When, Then } = createBdd(test);

let login;

Given('user navigate to parabank {string}', async ({ page }, url) => {
  login = new LoginPage(page);
  await login.launch(url);
});

When('user enter username {string}', async ({}, username) => {
  await login.enterUsername(username);
});

When('user enter password {string}', async ({}, password) => {
  await login.enterPassword(password);
});

When('user click on login button', async () => {
  await login.clickLogin();
});

Then('user should be logged in successfully', async () => {
  await expect(login.dashboard).toBeVisible();
});
