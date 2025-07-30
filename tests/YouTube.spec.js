import test from "@playwright/test";
import { YouTubePage } from "../PageObjects/YoutubePage"

test.describe('you tube search scenario', () => {

        test.beforeEach("launch the application", async({page})=> {
        await page.goto("https://www.youtube.com/");
    })

test('search the video',  async({ page }) => {
    const Objeyoutubepag= new YouTubePage(page);
    await Objeyoutubepag.searchfunc();
    
})



})