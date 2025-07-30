import { expect, Locator, Page } from "@playwright/test";

export class Tablevalue {
    readonly page: Page;
    readonly tableval: Locator;
    readonly hidbutton: Locator;
    readonly showbutton: Locator;
    readonly hidtextbox: Locator;


    constructor(page: Page) {
        this.page = page;
        this.tableval = this.page.locator('//table[@id="product"][@name="courses"]/tbody/tr[2]/td[2]');
        this.hidbutton = this.page.locator('#hide-textbox');
        this.showbutton = this.page.locator('#show-textbox');
        this.hidtextbox = this.page.getByPlaceholder('Hide/Show Example');

    }

    async verifyvaue() {
        let pagetitle = await this.page.title();
        await expect(this.page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");
        await expect(this.page).toHaveTitle(pagetitle);
        let tableval = await this.tableval.textContent();
        expect(tableval).toContain("Selenium");

    }
    async verifyElementdisplayed() {
        // const element = this.page.locator('this.hidbutton');
        // await element.scrollIntoViewIfNeeded();
        await this.page.evaluate(() => window.scrollBy(0, 500)); 

        await this.hidbutton.click();
        await expect(this.hidtextbox).not.toBeVisible();
        await this.showbutton.click();
        await expect(this.hidtextbox).toBeVisible();
    }
}