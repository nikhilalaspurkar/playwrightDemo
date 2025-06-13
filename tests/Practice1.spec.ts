import test, { expect } from "@playwright/test";
import { Practicepage } from "../PageObjects/Practice1page";
test.describe("rahul shetty academy", () => {

    test.beforeEach("launch the rahul shetty", async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    })

    test("click on radio button", async ({ page }) => {
        //radio button method
        const practicepage = new Practicepage(page);
        await practicepage.radiobuttonclick();
    })

    test.only("handle new window", async ({ page }) => {
        const [newtab] = await Promise.all([
            page.waitForEvent("popup"),
            page.locator('#openwindow').click(),
        ]);

        await newtab.waitForLoadState("load");

        let allcoursebuton = newtab.locator('//a[contains(text(),"Access all our Courses")]');
        await expect(allcoursebuton).toBeVisible();

    })

})