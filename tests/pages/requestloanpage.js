class RequestLoan {
  constructor(page) {
    this.page = page;
    this.userNameTF = page.locator('//input[@name="username"]');
    this.passwordTF = page.locator('//input[@name="password"]');
    this.LoginBTN = page.locator('//input[@value="Log In"]');
    this.RequestloanBTN = page.locator('//a[text()="Request Loan"]');
    this.LoanAmountTF = page.locator('input#amount');
    this.DownPaymentTF = page.locator('input#downPayment');
    this.FromAccountDDL = page.locator('select#fromAccountId');
    this.ApplyNowBTN = page.locator('//input[@value="Apply Now"]');
    this.statusCell = page.locator('//td[@id="loanStatus"]');
  }

  async launchURL(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async userName(username) {
    await this.userNameTF.fill(username);
  }

  async password(password) {
    await this.passwordTF.fill(password);
  }

  async login() {
    await this.LoginBTN.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickRequestLoan() {
    await this.RequestloanBTN.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterLoanAmount(amount) {
    await this.LoanAmountTF.fill(amount.toString());
  }

  async enterDownPayment(downPayment) {
    await this.DownPaymentTF.fill(downPayment.toString());
  }

  async selectFromAccount(accountId) {
    await this.FromAccountDDL.waitFor({ state: 'visible' });
    await this.FromAccountDDL.selectOption(accountId.toString());
  }

  async clickApplyNow() {
    await this.ApplyNowBTN.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getLoanStatus() {
    await this.statusCell.waitFor({ state: 'visible' });
    return (await this.statusCell.textContent()).trim();
  }
}

module.exports = { RequestLoan };