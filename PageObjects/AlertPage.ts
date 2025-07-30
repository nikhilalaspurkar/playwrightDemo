import { Locator, Page } from "@playwright/test";

export class AlertPage{

    readonly page: Page;
    readonly textbox: Locator;
    readonly clickalert: Locator;

    constructor(page: Page) 
    {
        this.page= page;
        this.textbox= this.page.locator('//input[@name="enter-name"]');
        this.clickalert= this.page.locator('#alertbtn');

    }

    async handlealert()
    {

        await this.textbox.type("nikhil");
        await this.clickalert.click();
    }

}