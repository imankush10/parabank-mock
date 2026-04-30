class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('input[value="Log In"]');
    this.dashboard = page.getByRole('heading', { name: 'Accounts Overview' });
    this.errorMsg = page.locator('.error');
  }

  async launch(url) {
    await this.page.goto(url);
  }

  async enterUsername(data) {
    await this.username.fill(data);
  }

  async enterPassword(data) {
    await this.password.fill(data);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };