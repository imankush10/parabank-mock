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

  async navigateToUpdatePage() {
    await this.updateLink.click();
  }

  async updateFirstName(name) {
    await this.firstName.fill(name);
  }

  async updateLastName(name) {
    await this.lastName.fill(name);
  }

  async updateAddress(address) {
    await this.address.fill(address);
  }

  async updateCity(city) {
    await this.city.fill(city);
  }

  async updateState(state) {
    await this.state.fill(state);
  }

  async updateZipCode(zip) {
    await this.zipCode.fill(zip);
  }

  async updatePhone(phone) {
    await this.phone.fill(phone);
  }

  async clickUpdate() {
    await this.updateBtn.click();
  }
}

module.exports = { UpdateContact };