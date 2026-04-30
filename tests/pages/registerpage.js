class Register{

    constructor(page){
        this.page =page

        // here we have the personal data
        this.firstName = page.locator('input[name="customer.firstName"]');
        this.lastName = page.locator('input[name="customer.lastName"]');
        this.address = page.locator('input[name="customer.address.street"]');
        this.city = page.locator('input[name="customer.address.city"]');
        this.state = page.locator('input[name="customer.address.state"]');
        this.zipCode = page.locator('input[name="customer.address.zipCode"]');
        this.phone = page.locator('input[name="customer.phoneNumber"]');
        this.ssn = page.locator('input[name="customer.ssn"]');

        //now we would add the login info
        this.username = page.locator('input[name="customer.username"]');
        this.confirmPassword = page.locator('input[name="repeatedPassword"]');
        this.password = page.locator('input[name="customer.password"]');
        
        this.registerBtn = page.locator('input[value="Register"]');
        this.successMsg = page.locator('.title');
}
      async launch(url) {
    await this.page.goto(url);
  }



  async enterFirstName(name) {
    await this.firstName.fill(name);
  }

  async enterLastName(name) {
    await this.lastName.fill(name);
  }

  async enterAddress(address) {
    await this.address.fill(address);
  }

  async enterCity(city) {
    await this.city.fill(city);
  }

  async enterState(state) {
    await this.state.fill(state);
  }

  async enterZipCode(zip) {
    await this.zipCode.fill(zip);
  }

  async enterPhone(phone) {
    await this.phone.fill(phone);
  }

  async enterSSN(ssn) {
    await this.ssn.fill(ssn);
  }

  async enterUsername(username) {
    await this.username.fill(username);
  }

  async enterPassword(password) {
    await this.password.fill(password);
  }

  async enterConfirmPassword(password) {
    await this.confirmPassword.fill(password);
  }

  async clickRegister() {
    await this.registerBtn.click();
  }

  
  async getSuccessMessage() {
    return this.successMsg;
  }
}

module.exports = { Register };
