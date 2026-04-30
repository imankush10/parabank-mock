const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { RequestLoan } = require('../pages/requestloanpage');
const { expect } = require('@playwright/test');

setDefaultTimeout(60000);


Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
  this.loanpg = new RequestLoan(this.page);
});

After(async function () {
  await this.page?.close();
  await this.browser?.close();
});

Given('navigate to {string}', async function (url) {
  await this.loanpg.launchURL(url);
});

When(/^enter username (.*)$/, async function (username) {
  await this.loanpg.userName(username);
});

When(/^enter password (.*)$/, async function (password) {
  await this.loanpg.password(password);
});

When('click on login', async function () {
  await this.loanpg.login();
});

When('click on Request Loan tab', async function () {
  await this.loanpg.clickRequestLoan();
});

When(/^enter Loan Amount (.*)$/, async function (amount) {
  await this.loanpg.enterLoanAmount(amount);
});

When(/^enter Down Payment (.*)$/, async function (downPayment) {
  await this.loanpg.enterDownPayment(downPayment);
});

When(/^select From Account (.*)$/, async function (accountId) {
  await this.loanpg.selectFromAccount(accountId);
});

When('click on Apply now', async function () {
  await this.loanpg.clickApplyNow();
});

Then(/^should see Status as (.*)$/, async function (status) {
  const actualStatus = await this.loanpg.getLoanStatus();
  expect(actualStatus).toBe(status);
});