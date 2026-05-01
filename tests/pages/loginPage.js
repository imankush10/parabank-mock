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

module.exports = { LoginPage };