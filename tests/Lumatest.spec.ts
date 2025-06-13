import test from "@playwright/test";
import { Lumapge } from "../PageObjects/Lumatestpage";

test.describe("smoke test for lumasite", () => {

    test.beforeEach('explore men section', async ({ page }) => {
        await page.goto("https://magento.softwaretestingboard.com/");
    })

    test("check jackets", async ({ page }) => {
        const lumapage = new Lumapge(page);
        await lumapage.selectjackets();

    })
})