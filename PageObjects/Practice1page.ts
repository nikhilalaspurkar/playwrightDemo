import { expect, Locator, Page, test } from "@playwright/test";
export class Practicepage{

    readonly page: Page;
    readonly radiobutton: Locator;
    readonly newwindowbutton: Locator;
    readonly opentab: Locator;
    readonly accescourse: Locator;

    constructor (page:Page)
    {
        this.page= page;
        this.radiobutton= this.page.locator('//input[@value="radio1"]');
        this.newwindowbutton= this.page.locator("#openwindow");
        this.accescourse= this.page.locator('//div[@class="button float-left"]');
        this.opentab= this.page.locator('#openwindow');
    }

    async radiobuttonclick()
    {
        await this.radiobutton.click();
        await expect(this.page.getByText("Practice Page")).toBeVisible();
    }
    async newwindowyab()
    {
        await this.newwindowbutton.click();
        this.page.waitForEvent;
        // const newpage= await pagePromise;
        console.log(await this.page.title());
        await this.accescourse.click();

    }
}
