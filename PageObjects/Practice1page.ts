import { Locator, Page, test } from "@playwright/test";
export class Practicepage{

    readonly page: Page;
    readonly radiobutton: Locator;

    constructor (page:Page)
    {
        this.page= page;
        this.radiobutton= this.page.locator('//input[@value="radio1"]');
    }

    async radiobuttonclick()
    {
        await this.radiobutton.click();
    }
}
