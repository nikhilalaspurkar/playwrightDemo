import { expect, Locator, Page } from "@playwright/test";

export class Orangeloginpage
{
readonly page: Page;
readonly loginbutton: Locator;
readonly username: Locator;
readonly password: Locator;

constructor(page:Page)
{
    this.page= page;
    this.loginbutton= this.page.locator("//button[@type='submit']");
    this.username= this.page.getByPlaceholder("Username");
    this.password= this.page.getByPlaceholder("Password");
}

async loginhrm(Username: string, pass: string){
    await this.page.waitForLoadState("load");
    //await this.loginbutton.waitFor({ state: "visible" });
    console.log("test flow");
    await this.page.waitForTimeout(2000); 
    await this.username.fill(Username);
    await this.password.fill(pass);
    await this.loginbutton.click();
    await expect(this.page).toHaveTitle("OrangeHRM");
    
}

}
