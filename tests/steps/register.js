const { Given, When, Then, Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { Register } = require('../pages/registerpage');

let browser, context, page, register;


BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});

// Given("navigate to {string}", async function (url) {
//   register = new Register(page);
//   await register.launch(url);
// });

When("enter firstname {string}", async function (fname) {
  await register.enterFirstName(fname);
});
When("enter lastname {string}", async function (lname) {
  await register.enterLastName(lname);
});
When("enter address {string}", async function (address) {
  await register.enterAddress(address);
});
When("enter city {string}", async function (city) {
  await register.enterCity(city);
});
When("enter state {string}", async function (state) {
  await register.enterState(state);
});
When("enter zipcode {string}", async function (zip) {
  await register.enterZipCode(zip);
});
When("enter phone number {string}", async function (phone) {
  await register.enterPhone(phone);
});
When("enter ssn {string}", async function (ssn) {
  await register.enterSSN(ssn);
});
When("enter username {string}", async function (username) {
  await register.enterUsername(username);
});
When("enter password {string}", async function (password) {
  await register.enterPassword(password);
});
When("enter confirm password {string}", async function (password) {
  await register.enterConfirmPassword(password);
});
When("click on submit button", async function () {
  await register.clickRegister();
});
Then("Should see confirmation {string}", async function (message) {
  await expect(register.successMsg).toHaveText(message);
});