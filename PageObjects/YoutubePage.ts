import { Locator, Page } from "@playwright/test";

export class YouTubePage{
    readonly page: Page;
    readonly searchbox: Locator;
    readonly searchicon: Locator;
    readonly searchlist: Locator;
    

    constructor (page:Page)
    {
        this.page= page;
        this.searchbox= this.page.getByPlaceholder("Search");
        this.searchicon= this.page.getByTitle("Search");
        this.searchlist= this.page.locator('//div[@class="ytSuggestionComponentLeftContainer"]');
    }

    async searchfunc ()
    {
        await this.searchbox.fill("Air india");
       // await this.searchicon.click();
        await this.page.waitForSelector('//div[@class="ytSuggestionComponentLeftContainer"]');

        const elmlist= await this.page.$$('//div[@class="ytSuggestionComponentLeftContainer"]');
        for(let i=0; i<elmlist.length; i++)
        {
            const text= await elmlist[i].textContent();
            {
                if(text?.includes("crash"))
                {
                    await elmlist[i].click();
                    break;
                }
            }
        }
    }
}