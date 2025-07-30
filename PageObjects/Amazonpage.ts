import test, { expect, Locator, Page } from "@playwright/test";

export class Amazonpages 
{
readonly page: Page;
readonly signinbutton: Locator;
readonly accountbutton: Locator;
readonly username: Locator;
readonly password: Locator;
readonly loginbutton: Locator;
readonly continuebutton: Locator;
readonly signin: Locator;
readonly accountext: Locator;
readonly searchinAmazon: Locator;
readonly searchicon: Locator;
readonly searchlist: Locator;

constructor (page: Page)
{
this.page= page;
this.accountbutton= this.page.locator("#nav-link-accountList");
this.signinbutton= this.page.locator(".nav-action-inner");
this.username= this.page.locator('//input[@name="email"]');
this.continuebutton= this.page.locator(".a-button-input");
this.password= this.page.locator("#ap_password");
this.signin =this.page.locator("#signInSubmit");
this.accountext= this.page.locator('//span[contains(text(), "Hello, NIKHIL")]');
this.searchinAmazon= this.page.getByPlaceholder("Search Amazon.in");
this.searchicon= this.page.locator("#nav-search-submit-button");
this.searchlist= this.page.locator('//div[@class="left-pane-results-container"]/div');
}
async loginamazon()
{
    await this.accountbutton.hover();
    await this.signinbutton.click();
    await this.username.fill("9767027007");
    await this.continuebutton.click();
    await this.password.type("pass");
    await this.signin.click();
   // let accountname= this.accountext.textContent();
    await expect(this.accountext).toHaveText('Hello, NIKHIL');

}
async searchiphone()
{
await this.searchinAmazon.type("iphone 16");
await this.page.waitForSelector('//div[@class="left-pane-results-container"]/div');

}
}