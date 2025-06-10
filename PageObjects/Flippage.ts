import { Locator, Page } from "@playwright/test";


export class Fourninenine {
    readonly page: Page;
    readonly fournineninesectore: Locator;
    readonly loginbuttondropdown: Locator;
     constructor(page:Page)
    {
        this.page= page;
        this.fournineninesectore = this.page.locator("//div[@class='tLbyDf']//div//a");
        this.loginbuttondropdown= this.page.locator("");
    }

    async selectfirstitem() {
        const listofitem = await this.fournineninesectore.count();
        console.log(listofitem);
        await this.fournineninesectore.nth(1).click();
    }
    async loginpopup() {

    }

}