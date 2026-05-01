class LoginPage {

  constructor(page) {

    this.page = page;

    this.username = page.locator('input[name="username"]');

    this.password = page.locator('input[name="password"]');

    this.loginBtn = page.locator('input[value="Log In"]');

    this.dashboard = page.getByRole('heading', { name: 'Accounts Overview' });

    this.errorMsg = page.getByRole('heading', { name: 'Error!' });

  }



  //methods to launch the url

  async launch(url) {

    await this.page.goto(url);

  }

  // methods to full username in username (login) textfeild

  async enterUsername(username) {

    await this.username.fill(username);

  }

  // method to full password in password (login) textfeild

  async enterPassword(password) {

    await this.password.fill(password);

  }

  // method to click to submit login form

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



  //methods to launch the url

  async launchurl(url) {

    await this.page.goto(url);

  }

  // method to click on openNewAccount button to start creating new account for user

  async clickOpenNewAccount() {

    await this.openNewAccount.click();

  }

  // method to select account type as savings from dropdown menu

  async selectAccountTypeAsSavings() {

    await this.accountTypeAsSavings.selectOption('1');

  }

  // method to select account to transfer funds to

  async selectAccountToTransferFundsForNewAccount() {

    await this.selectTransferFundsToAccount.selectOption({ index: 0 });

  }

  // method to click on confirm to open new account button

  async clickOpenNewAccountBtn() {

    await this.openNewAccountButton.click();

  }

  // method to fetch new account number generated randomly on website

  async getNewAccountNumber() {

    const accNo = await this.newAccountNumber.textContent();

    return accNo;

  }

  // method to click on transfer funds button

  async clickForTransferFunds() {

    await this.transferFunds.click();

  }

  // method to enter amount to transfer to another account

  async enterAmountToTransfer(amount) {

    await this.amountTextField.fill(amount);

  }

  // method to select from account

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

  // methods to launch the url

  async launch(url) {

    await this.page.goto(url);

  }

  // method to enter first name

  async enterFirstName(name) { await this.firstName.fill(name); }

  // method to enter last name

  async enterLastName(name) { await this.lastName.fill(name); }

  // method to enter address

  async enterAddress(address) { await this.address.fill(address); }

  // method to enter city

  async enterCity(city) { await this.city.fill(city); }

  // method to enter state

  async enterState(state) { await this.state.fill(state); }

  // method to enter zip code

  async enterZipCode(zip) { await this.zipCode.fill(zip); }

  // method to enter phone number

  async enterPhone(phone) { await this.phone.fill(phone); }

  // method to enter ssn

  async enterSSN(ssn) { await this.ssn.fill(ssn); }

  // method to enter username

  async enterUsername(username) { await this.username.fill(username); }

  // method to enter password

  async enterPassword(password) { await this.password.fill(password); }

  // method to confirm password

  async enterConfirmPassword(password) { await this.confirmPassword.fill(password); }


  // method to click register button

  async clickRegister() {

    await this.registerBtn.click();

  }


  // method to get success message after registration

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


  // methods to launch the url and wait for page load

  async launchURL(url) {

    await this.page.goto(url);

    await this.page.waitForLoadState('domcontentloaded');

  }


  // method to enter username

  async userName(username) { await this.userNameTF.fill(username); }

  // method to enter password

  async password(password) { await this.passwordTF.fill(password); }


  // method to login into application

  async login() {

    await this.loginBtn.click();

    await this.page.waitForLoadState('networkidle');

  }


  // method to click on request loan option

  async clickRequestLoan() {

    await this.requestLoanBtn.click();

    await this.page.waitForLoadState('domcontentloaded');

  }


  // method to enter loan amount

  async enterLoanAmount(amount) { await this.loanAmountTF.fill(amount.toString()); }

  // method to enter down payment

  async enterDownPayment(downPayment) { await this.downPaymentTF.fill(downPayment.toString()); }


  // method to select from account from dropdown

  async selectFromAccount(accountId) {

    await this.fromAccountDDL.waitFor({ state: 'visible' });

    await this.fromAccountDDL.selectOption(accountId.toString());

  }


  // method to click apply now button

  async clickApplyNow() {

    await this.applyNowBtn.click();

    await this.page.waitForLoadState('networkidle');

  }


  // method to get loan status

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


  // method to navigate to update contact page

  async navigateToUpdatePage() { await this.updateLink.click(); }

  // method to update first name

  async updateFirstName(name) { await this.firstName.fill(name); }

  // method to update last name

  async updateLastName(name) { await this.lastName.fill(name); }

  // method to update address

  async updateAddress(address) { await this.address.fill(address); }

  // method to update city

  async updateCity(city) { await this.city.fill(city); }

  // method to update state

  async updateState(state) { await this.state.fill(state); }

  // method to update zip code

  async updateZipCode(zip) { await this.zipCode.fill(zip); }

  // method to update phone number

  async updatePhone(phone) { await this.phone.fill(phone); }


  // method to click update button

  async clickUpdate() {

    await this.updateBtn.click();

  }

}



module.exports = { LoginPage, OpenAccount, Register, RequestLoan, UpdateContact };