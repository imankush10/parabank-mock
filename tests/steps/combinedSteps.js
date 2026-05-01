const{Given, When, Then, BeforeAll, AfterAll, Before, After, setDefaultTimeout}=require('@cucumber/cucumber');
const{chromium }=require('playwright');
const{expect }=require('@playwright/test');
const{LoginPage,OpenAccount,Register,RequestLoan,UpdateContact}=require('../pages/combinedPage');
setDefaultTimeout(60000);

let browser;
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  this.context = await browser.newContext();[]
  this.page = await this.context.newPage();
});

After(async function () {
  await this.context.close();
});

AfterAll(async () => {
  await browser.close();
});


Given('navigate to {string}', async function (url) {
  await this.page.goto(url);

  if (url.includes('register')) {
    this.register = new Register(this.page);
  } else if (url.includes('openaccount') || url.includes('index')) {
    this.openAccountPage = new OpenAccount(this.page);
    this.loanPage = new RequestLoan(this.page);
  }
});


Given('user navigate to parabank {string}', async function (url) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.launch(url);
});

When('user enter username {string}', async function (username) {
  if (!this.loginPage) this.loginPage = new LoginPage(this.page);
  await this.loginPage.enterUsername(username);
});

When('user enter password {string}', async function (password) {
  if (!this.loginPage) this.loginPage = new LoginPage(this.page);
  await this.loginPage.enterPassword(password);
});

When('user click on login button', async function () {
  if (!this.loginPage) this.loginPage = new LoginPage(this.page);
  await this.loginPage.clickLogin();
  await this.page.waitForLoadState('networkidle');
});

Then('user should be logged in successfully', async function () {
  await expect(this.loginPage.dashboard).toBeVisible();
});


Given('click on Open New Account link', async function () {
  if (!this.openAccountPage) this.openAccountPage = new OpenAccount(this.page);
  await this.openAccountPage.clickOpenNewAccount();
});

Given('select account type as {string}', async function (_accountType) {
  await this.openAccountPage.selectAccountTypeAsSavings();
});

Given('select accounts for fund transfer', async function () {
  await this.openAccountPage.selectAccountToTransferFundsForNewAccount();
});

Given('click on button {string}', async function (_label) {
  await this.openAccountPage.clickOpenNewAccountBtn();
});

Given('fetch new account number', async function () {
  const accNo = await this.openAccountPage.getNewAccountNumber();
  this.newAccountNumber = accNo;
  console.log('Created Account:', accNo);
});

Given('click on Transfer Funds link', async function () {
  await this.openAccountPage.clickForTransferFunds();
});

Given('enter transfer amount {string}', async function (amount) {
  await this.openAccountPage.enterAmountToTransfer(amount);
});


Given('enter firstname {string}', async function (fname) {
  if (!this.register) this.register = new Register(this.page);
  await this.register.enterFirstName(fname);
});

Given('enter lastname {string}', async function (lname) {
  await this.register.enterLastName(lname);
});

Given('enter address {string}', async function (address) {
  await this.register.enterAddress(address);
});

Given('enter city {string}', async function (city) {
  await this.register.enterCity(city);
});

Given('enter state {string}', async function (state) {
  await this.register.enterState(state);
});

Given('enter zipcode {string}', async function (zip) {
  await this.register.enterZipCode(zip);
});

Given('enter phone number {string}', async function (phone) {
  await this.register.enterPhone(phone);
});

Given('enter ssn {string}', async function (ssn) {
  await this.register.enterSSN(ssn);
});

Given('enter username {string}', async function (username) {
  await this.register.enterUsername(username);
});

Given('enter password {string}', async function (password) {
  await this.register.enterPassword(password);
});

Given('enter confirm password {string}', async function (password) {
  await this.register.enterConfirmPassword(password);
});

When('click on submit button', async function () {
  await this.register.clickRegister();
});

Then('Should see confirmation {string}', async function (message) {
  await expect(this.register.successMsg).toHaveText(message);
});

When(/^enter loan username (.+)$/, async function (username) {
  if (!this.loanPage) this.loanPage = new RequestLoan(this.page);
  await this.loanPage.userName(username);
});

When(/^enter loan password (.+)$/, async function (password) {
  if (!this.loanPage) this.loanPage = new RequestLoan(this.page);
  await this.loanPage.password(password);
});

When('click on login', async function () {
  await this.loanPage.login();
});

When('click on Request Loan tab', async function () {
  await this.loanPage.clickRequestLoan();
});

When(/^enter Loan Amount (.+)$/, async function (amount) {
  await this.loanPage.enterLoanAmount(amount);
});

When(/^enter Down Payment (.+)$/, async function (downPayment) {
  await this.loanPage.enterDownPayment(downPayment);
});

When(/^select From Account (.+)$/, async function (accountId) {
  await this.loanPage.selectFromAccount(accountId);
});

When('click on Apply now', async function () {
  await this.loanPage.clickApplyNow();
});

Then(/^should see Status as (.+)$/, async function (status) {
  const actualStatus = await this.loanPage.getLoanStatus();
  expect(actualStatus).toBe(status);
});

Given('user logs in with username {string} and password {string}', async function (username, password) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.launch('https://parabank.parasoft.com/parabank/index.htm');
  await this.loginPage.enterUsername(username);
  await this.loginPage.enterPassword(password);
  await this.loginPage.clickLogin();
  await this.page.waitForLoadState('networkidle');

  if (await this.loginPage.errorMsg.isVisible()) {
    throw new Error('Login failed — invalid username/password');
  }
  await expect(this.loginPage.dashboard).toBeVisible();
});

When('user navigates to update contact info page', async function () {
  this.updatePage = new UpdateContact(this.page);
  await this.updatePage.navigateToUpdatePage();
});

When('updates first name {string}', async function (name) {
  await this.updatePage.updateFirstName(name);
});

When('updates last name {string}', async function (name) {
  await this.updatePage.updateLastName(name);
});

When('updates address {string}', async function (address) {
  await this.updatePage.updateAddress(address);
});

When('updates city {string}', async function (city) {
  await this.updatePage.updateCity(city);
});

When('updates state {string}', async function (state) {
  await this.updatePage.updateState(state);
});

When('updates zip code {string}', async function (zip) {
  await this.updatePage.updateZipCode(zip);
});

When('updates phone number {string}', async function (phone) {
  await this.updatePage.updatePhone(phone);
});

When('clicks update button', async function () {
  await this.updatePage.clickUpdate();
  await this.page.waitForLoadState('networkidle');
});

Then('should see update success message', async function () {
  if (await this.updatePage.errorMsg.isVisible()) {
    throw new Error('Update failed — error heading is visible');
  }
  await expect(this.updatePage.successMsg).toBeVisible();
});
