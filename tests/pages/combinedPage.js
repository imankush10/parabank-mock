class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('input[value="Log In"]');
    this.dashboard = page.getByRole('heading', { name: 'Accounts Overview' });
    this.errorMsg = page.getByRole('heading', { name: 'Error!' });
  }

  async launch(url) {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.username.fill(username);
  }

  async enterPassword(password) {
    await this.password.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }
}


class OpenAccount {
  constructor(page) {
    this.page = page;
    this.openNewAccount = page.locator('//*[@id="leftPanel"]/ul/li[1]/a');
    this.accountTypeAsSavings = page.locator('//*[@id="type"]');
    this.selectTransferFundsToAccount = page.locator('//*[@id="fromAccountId"]');
    this.openNewAccountButton = page.locator('//input[@value="Open New Account"]');
    this.newAccountNumber = page.locator('//*[@id="newAccountId"]');
    this.transferFunds = page.locator('//*[@id="leftPanel"]/ul/li[3]/a');
    this.amountTextField = page.locator('//input[@id="amount"]');
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
    await this.accountTypeAsSavings.selectOption('1');
  }

  async selectAccountToTransferFundsForNewAccount() {
    await this.selectTransferFundsToAccount.selectOption({ index: 0 });
  }

  async clickOpenNewAccountBtn() {
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
    await this.amountTextField.fill(amount);
  }

  async selectFromAccount() {
    await this.fromAccountSelection.selectOption({ index: 0 });
  }
}

class Register {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('input[name="customer.firstName"]');
    this.lastName = page.locator('input[name="customer.lastName"]');
    this.address = page.locator('input[name="customer.address.street"]');
    this.city = page.locator('input[name="customer.address.city"]');
    this.state = page.locator('input[name="customer.address.state"]');
    this.zipCode = page.locator('input[name="customer.address.zipCode"]');
    this.phone = page.locator('input[name="customer.phoneNumber"]');
    this.ssn = page.locator('input[name="customer.ssn"]');
    this.username = page.locator('input[name="customer.username"]');
    this.password = page.locator('input[name="customer.password"]');
    this.confirmPassword = page.locator('input[name="repeatedPassword"]');
    this.registerBtn = page.locator('input[value="Register"]');
    this.successMsg = page.locator('.title');
  }

  async launch(url) {
    await this.page.goto(url);
  }

  async enterFirstName(name) { await this.firstName.fill(name); }
  async enterLastName(name) { await this.lastName.fill(name); }
  async enterAddress(address) { await this.address.fill(address); }
  async enterCity(city) { await this.city.fill(city); }
  async enterState(state) { await this.state.fill(state); }
  async enterZipCode(zip) { await this.zipCode.fill(zip); }
  async enterPhone(phone) { await this.phone.fill(phone); }
  async enterSSN(ssn) { await this.ssn.fill(ssn); }
  async enterUsername(username) { await this.username.fill(username); }
  async enterPassword(password) { await this.password.fill(password); }
  async enterConfirmPassword(password) { await this.confirmPassword.fill(password); }

  async clickRegister() {
    await this.registerBtn.click();
  }

  async getSuccessMessage() {
    return this.successMsg;
  }
}


class RequestLoan {
  constructor(page) {
    this.page = page;
    this.userNameTF = page.locator('//input[@name="username"]');
    this.passwordTF = page.locator('//input[@name="password"]');
    this.loginBtn = page.locator('//input[@value="Log In"]');
    this.requestLoanBtn = page.locator('//a[text()="Request Loan"]');
    this.loanAmountTF = page.locator('input#amount');
    this.downPaymentTF = page.locator('input#downPayment');
    this.fromAccountDDL = page.locator('select#fromAccountId');
    this.applyNowBtn = page.locator('//input[@value="Apply Now"]');
    this.statusCell = page.locator('//td[@id="loanStatus"]');
  }

  async launchURL(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async userName(username) { await this.userNameTF.fill(username); }
  async password(password) { await this.passwordTF.fill(password); }

  async login() {
    await this.loginBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickRequestLoan() {
    await this.requestLoanBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterLoanAmount(amount) { await this.loanAmountTF.fill(amount.toString()); }
  async enterDownPayment(downPayment) { await this.downPaymentTF.fill(downPayment.toString()); }

  async selectFromAccount(accountId) {
    await this.fromAccountDDL.waitFor({ state: 'visible' });
    await this.fromAccountDDL.selectOption(accountId.toString());
  }

  async clickApplyNow() {
    await this.applyNowBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getLoanStatus() {
    await this.statusCell.waitFor({ state: 'visible' });
    return (await this.statusCell.textContent()).trim();
  }
}

class UpdateContact {
  constructor(page) {
    this.page = page;
    this.updateLink = page.locator('a[href*="updateprofile"]');
    this.firstName = page.locator('input[name="customer.firstName"]');
    this.lastName = page.locator('input[name="customer.lastName"]');
    this.address = page.locator('input[name="customer.address.street"]');
    this.city = page.locator('input[name="customer.address.city"]');
    this.state = page.locator('input[name="customer.address.state"]');
    this.zipCode = page.locator('input[name="customer.address.zipCode"]');
    this.phone = page.locator('input[name="customer.phoneNumber"]');
    this.updateBtn = page.locator('input[value="Update Profile"]');
    this.successMsg = page.getByRole('heading', { name: 'Profile Updated' });
    this.errorMsg = page.getByRole('heading', { name: 'Error!' });
  }

  async navigateToUpdatePage() { await this.updateLink.click(); }
  async updateFirstName(name) { await this.firstName.fill(name); }
  async updateLastName(name) { await this.lastName.fill(name); }
  async updateAddress(address) { await this.address.fill(address); }
  async updateCity(city) { await this.city.fill(city); }
  async updateState(state) { await this.state.fill(state); }
  async updateZipCode(zip) { await this.zipCode.fill(zip); }
  async updatePhone(phone) { await this.phone.fill(phone); }

  async clickUpdate() {
    await this.updateBtn.click();
  }
}

module.exports = { LoginPage, OpenAccount, Register, RequestLoan, UpdateContact };
