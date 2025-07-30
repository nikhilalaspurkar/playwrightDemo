import test from "@playwright/test";
import { Amazonpages } from "../PageObjects/Amazonpage";


test.beforeEach('launch the app', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState("load");
})

test.describe("amazon search scenario", () => {

    test("login amaazon app", async ({ page }) => {
        const amzonpage = new Amazonpages(page);
        await amzonpage.loginamazon();

    })
    test.only("search the product", { tag: ["@smoke", "@regression"] }, async ({ page }) => {
        const amzonpage = new Amazonpages(page);
        await amzonpage.loginamazon();
        
        await amzonpage.searchiphone();


        const element = await page.$$('//div[@class="left-pane-results-container"]/div')
        for (let i = 0; i < element.length; i++) {
            const texts = await element[i].textContent();

            if (texts?.includes("pro max")) {
                await element[i].click();
                break;
            }
        }
    })

})