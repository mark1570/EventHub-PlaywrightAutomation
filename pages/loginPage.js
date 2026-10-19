export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.getByLabel('password');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
  }

  async open() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.type(email);
    await this.passwordInput.type(password);
    await this.loginButton.click();
  }
}