import { Locator, Page } from "@playwright/test";

export class Lumapge
{
    readonly page: Page;
    readonly mensection: Locator;
    readonly jacket: Locator;
    readonly top: Locator;
    readonly jacketlist: Locator;

    constructor (page: Page)
    {
        this.page= page;
        this.mensection= this.page.locator("#ui-id-5");
        this.top= this.page.locator("#ui-id-17");
        this.jacket= this.page.locator("#ui-id-19");
        this.jacketlist= this.page.locator('//ol[@class="products list items product-items"]/li');
    }
    async selectjackets()
    {
        await this.page.waitForLoadState();
        await this.page.waitForTimeout(10000);
        await this.mensection.hover();
        await this.top.hover();
        await this.jacket.click();
        let count= await this.jacketlist.count();
        await this.jacketlist.nth(1).click();
    }
}