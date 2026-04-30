class openAccount {
    constructor(page) {
        this.page = page;
        this.openNewAccount = page.locator('//*[@id="leftPanel"]/ul/li[1]/a');
        this.accountTypeAsSavings = page.locator('//*[@id="type"]');
        this.selectTransferFundsToAccount = page.locator('//*[@id="fromAccountId"]');
        this.openNewAccountButton = page.locator('//input[@value="Open New Account"]');
        this.newAccountNumber = page.locator('//*[@id="newAccountId"]');
        this.transferFunds = page.locator('//*[@id="leftPanel"]/ul/li[3]/a');
        this.amountTextFeild = page.locator('//input[@id="amount"]');
        this.fromAccountSelection = page.locator('//select[@id="fromAccountId"]');
        this.toAccountSelection = page.locator('//select[@id="toAccountId"]');
    }

    async launchurl(url) {
        await this.page.goto(url);
    }

    async clickOpenNewAccount() {
        await this.openNewAccount.click();
    }

    async selectAccountTypeAsSavings() {
        // ParaBank SAVINGS value is typically "1"
        await this.accountTypeAsSavings.selectOption("1"); 
    }

    async selectAccountToTransferFundsForNewAccount() {
        // selectOption is required to interact with dropdowns
        await this.selectTransferFundsToAccount.selectOption({ index: 0 });
    }

    async clickOpenNewAccountBtn() { // Renamed slightly to avoid duplicate function name
        await this.openNewAccountButton.click();
    }

    async getNewAccountNumber() {
        const accNo = await this.newAccountNumber.textContent();
        return accNo;
    }

    async clickForTransferFunds() {
        await this.transferFunds.click();
    }

    async enterAmountToTransfer(amount) {
        await this.amountTextFeild.fill(amount);
    }

    async selectFromAccount() {
        await this.fromAccountSelection.selectOption({ index: 0 });
    }
}

module.exports = { openAccount };