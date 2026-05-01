const { openAccount }=require("../pages/openAccountpage");
const { Given, When, Then, Before, After, setDefaultTimeout, BeforeAll }=require('@cucumber/cucumber');
const { expect, chromium ,test}=require("@playwright/test");

let browser, context, page, enterpage;
setDefaultTimeout(60000);

Before(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    enterpage = new openAccount(page);
});

Given("navigate to {string}", async (url) => {
    await enterpage.launchurl(url);
});

Given("click on Open New Account link", async () => {
    await enterpage.clickOpenNewAccount();
});

Given("select account type as savings", async () => {
    await enterpage.selectAccountTypeAsSavings();
});

Given("select accounts for fund transfer", async () => {
    await enterpage.selectAccountToTransferFundsForNewAccount();
});

Given("click on button {string}", async (clickButton) => {
    await enterpage.clickOpenNewAccountBtn();
});

Given("fetch new account number", async () => {
    const accNo = await enterpage.getNewAccountNumber();
    console.log("Created Account: " + accNo);
});

Given("click on Transfer Funds link", async () => {
    await enterpage.clickForTransferFunds();
});

Given("enter transfer amount {string}", async (amount) => {
    await enterpage.enterAmountToTransfer(amount);
});

After(async () => {
    await browser.close();
});