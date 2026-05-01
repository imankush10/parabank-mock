const{Given, When, Then, BeforeAll, AfterAll, Before, After, setDefaultTimeout}=require('@cucumber/cucumber');
const{chromium }=require('playwright');
const{expect }=require('@playwright/test');
const{LoginPage,OpenAccount,Register,RequestLoan,UpdateContact}=require('../pages/combinedPage');

// method to set default timeout for all steps
setDefaultTimeout(60000);

let browser;

// method to launch browser before all tests
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

// method to create new browser context and page before each test
Before(async function () {
  this.context = await browser.newContext();[]
  this.page = await this.context.newPage();
});

// method to close browser context after each test
After(async function () {
  await this.context.close();
});

// method to close browser after all tests
AfterAll(async () => {
  await browser.close();
});


// method to navigate to given url and initialize pages based on url
Given('navigate to {string}', async function (url) {
  await this.page.goto(url);

  if (url.includes('register')) {
    this.register = new Register(this.page);
  } else if (url.includes('openaccount') || url.includes('index')) {
    this.openAccountPage = new OpenAccount(this.page);
    this.loanPage = new RequestLoan(this.page);
  }
});


// method to navigate to parabank login page
Given('user navigate to parabank {string}', async function (url) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.launch(url);
});

// method to enter username in login page
When('user enter username {string}', async function (username) {
  if (!this.loginPage) this.loginPage = new LoginPage(this.page);
  await this.loginPage.enterUsername(username);
});

// method to enter password in login page
When('user enter password {string}', async function (password) {
  if (!this.loginPage) this.loginPage = new LoginPage(this.page);
  await this.loginPage.enterPassword(password);
});

// method to click login button
When('user click on login button', async function () {
  if (!this.loginPage) this.loginPage = new LoginPage(this.page);
  await this.loginPage.clickLogin();
  await this.page.waitForLoadState('networkidle');
});

// method to verify user logged in successfully
Then('user should be logged in successfully', async function () {
  await expect(this.loginPage.dashboard).toBeVisible();
});


// method to click on open new account link
Given('click on Open New Account link', async function () {
  if (!this.openAccountPage) this.openAccountPage = new OpenAccount(this.page);
  await this.openAccountPage.clickOpenNewAccount();
});

// method to select account type
Given("select account type as savings", async () => {
    await enterpage.selectAccountTypeAsSavings();
});

// method to select accounts for fund transfer
Given('select accounts for fund transfer', async function () {
  await this.openAccountPage.selectAccountToTransferFundsForNewAccount();
});

// method to click open new account button
Given('click on button {string}', async function (label) {
  await this.openAccountPage.clickOpenNewAccountBtn();
});

// method to fetch newly created account number
Given('fetch new account number', async function () {
  const accNo = await this.openAccountPage.getNewAccountNumber();
  this.newAccountNumber = accNo;
  console.log('Created Account:', accNo);
});

// method to click transfer funds link
Given('click on Transfer Funds link', async function () {
  await this.openAccountPage.clickForTransferFunds();
});

// method to enter transfer amount
Given('enter transfer amount {string}', async function (amount) {
  await this.openAccountPage.enterAmountToTransfer(amount);
});


// method to enter first name in registration form
Given('enter firstname {string}', async function (fname) {
  if (!this.register) this.register = new Register(this.page);
  await this.register.enterFirstName(fname);
});

// method to enter last name
Given('enter lastname {string}', async function (lname) {
  await this.register.enterLastName(lname);
});

// method to enter address
Given('enter address {string}', async function (address) {
  await this.register.enterAddress(address);
});

// method to enter city
Given('enter city {string}', async function (city) {
  await this.register.enterCity(city);
});

// method to enter state
Given('enter state {string}', async function (state) {
  await this.register.enterState(state);
});

// method to enter zipcode
Given('enter zipcode {string}', async function (zip) {
  await this.register.enterZipCode(zip);
});

// method to enter phone number
Given('enter phone number {string}', async function (phone) {
  await this.register.enterPhone(phone);
});

// method to enter ssn
Given('enter ssn {string}', async function (ssn) {
  await this.register.enterSSN(ssn);
});

// method to enter username in register
Given('enter username {string}', async function (username) {
  await this.register.enterUsername(username);
});

// method to enter password in register
Given('enter password {string}', async function (password) {
  await this.register.enterPassword(password);
});

// method to confirm password
Given('enter confirm password {string}', async function (password) {
  await this.register.enterConfirmPassword(password);
});

// method to click submit button
When('click on submit button', async function () {
  await this.register.clickRegister();
});

// method to verify confirmation message
Then('Should see confirmation {string}', async function (message) {
  await expect(this.register.successMsg).toHaveText(message);
});


// method to enter username for loan
When(/^enter loan username (.+)$/, async function (username) {
  if (!this.loanPage) this.loanPage = new RequestLoan(this.page);
  await this.loanPage.userName(username);
});

// method to enter password for loan
When(/^enter loan password (.+)$/, async function (password) {
  if (!this.loanPage) this.loanPage = new RequestLoan(this.page);
  await this.loanPage.password(password);
});

// method to click login for loan
When('click on login', async function () {
  await this.loanPage.login();
});

// method to click request loan tab
When('click on Request Loan tab', async function () {
  await this.loanPage.clickRequestLoan();
});

// method to enter loan amount
When(/^enter Loan Amount (.+)$/, async function (amount) {
  await this.loanPage.enterLoanAmount(amount);
});

// method to enter down payment
When(/^enter Down Payment (.+)$/, async function (downPayment) {
  await this.loanPage.enterDownPayment(downPayment);
});

// method to select from account
When(/^select From Account (.+)$/, async function (accountId) {
  await this.loanPage.selectFromAccount(accountId);
});

// method to click apply now button
When('click on Apply now', async function () {
  await this.loanPage.clickApplyNow();
});

// method to verify loan status
Then(/^should see Status as (.+)$/, async function (status) {
  const actualStatus = await this.loanPage.getLoanStatus();
  expect(actualStatus).toBe(status);
});


// method to login with username and password
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


// method to navigate to update contact page
When('user navigates to update contact info page', async function () {
  this.updatePage = new UpdateContact(this.page);
  await this.updatePage.navigateToUpdatePage();
});

// method to update first name
When('updates first name {string}', async function (name) {
  await this.updatePage.updateFirstName(name);
});

// method to update last name
When('updates last name {string}', async function (name) {
  await this.updatePage.updateLastName(name);
});

// method to update address
When('updates address {string}', async function (address) {
  await this.updatePage.updateAddress(address);
});

// method to update city
When('updates city {string}', async function (city) {
  await this.updatePage.updateCity(city);
});

// method to update state
When('updates state {string}', async function (state) {
  await this.updatePage.updateState(state);
});

// method to update zip code
When('updates zip code {string}', async function (zip) {
  await this.updatePage.updateZipCode(zip);
});

// method to update phone number
When('updates phone number {string}', async function (phone) {
  await this.updatePage.updatePhone(phone);
});

// method to click update button
When('clicks update button', async function () {
  await this.updatePage.clickUpdate();
  await this.page.waitForLoadState('networkidle');
});

// method to verify update success message
Then('should see update success message', async function () {
  if (await this.updatePage.errorMsg.isVisible()) {
    throw new Error('Update failed — error heading is visible');
  }
  await expect(this.updatePage.successMsg).toBeVisible();
});