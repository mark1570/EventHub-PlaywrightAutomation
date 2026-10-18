class loginPage{
    constructor(page){
        this.page = page;
        this.email = page.locator("#email");
        this.password = page.getbylabel("password");
        this.signInBtn = page.getbyrole("button", {name: "Sign In"});
    }

      async goto() {
     await this.page.goto('/login');
  }

   async login(email, password){
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInBtn.click();
   }

}