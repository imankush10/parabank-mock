const { test } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { Register } = require('../pages/registerpage');

const { Given, When, Then } = createBdd(test);

let register;

Given('navigate to {string}', async ({ page }, url) => {
  register = new Register(page);
  await register.launch(url);
});

When('enter firstname {string}', async ({}, fname) => {
  await register.enterFirstName(fname);
});

When('enter lastname {string}', async ({}, lname) => {
  await register.enterLastName(lname);
});

When('enter address {string}', async ({}, address) => {
  await register.enterAddress(address);
});

When('enter city {string}', async ({}, city) => {
  await register.enterCity(city);
});

When('enter state {string}', async ({}, state) => {
  await register.enterState(state);
});

When('enter zipcode {string}', async ({}, zip) => {
  await register.enterZipCode(zip);
});

When('enter phone number {string}', async ({}, phone) => {
  await register.enterPhone(phone);
});

When('enter ssn {string}', async ({}, ssn) => {
  await register.enterSSN(ssn);
});

When('enter username {string}', async ({}, username) => {
  await register.enterUsername(username);
});

When('enter password {string}', async ({}, password) => {
  await register.enterPassword(password);
});

When('enter confirm password {string}', async ({}, password) => {
  await register.enterConfirmPassword(password);
});

When('click on submit button', async () => {
  await register.clickRegister();
});

Then('Should see confirmation {string}', async ({}, message) => {
  await expect(register.successMsg).toContainText(message);
});