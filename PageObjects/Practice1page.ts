import { expect, Locator, Page, test } from "@playwright/test";
export class Practicepage{

    readonly page: Page;
    readonly radiobutton: Locator;
    readonly newwindowbutton: Locator;
    readonly opentab: Locator;
    readonly accescourse: Locator;
    readonly dropdown: Locator;

    constructor (page:Page)
    {
        this.page= page;
        this.radiobutton= this.page.locator('//input[@value="radio1"]');
        this.newwindowbutton= this.page.locator("#openwindow");
        this.accescourse= this.page.locator('//div[@class="button float-left"]');
        this.opentab= this.page.locator('#openwindow');
        this.dropdown= this.page.locator('#dropdown-class-example');

    }

    async radiobuttonclick()
    {
        await this.radiobutton.click();
        await expect(this.page.getByText("Practice Page")).toBeVisible();
        await this.dropdown.click();
        await this.dropdown.selectOption({index: 2});
    }
    async newwindowyab()
    {
        

    }
}
