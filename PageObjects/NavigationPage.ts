import { Locator, Page } from "@playwright/test";

export class NavigationPage
{
    readonly page: Page;
    readonly formsvar:Locator;
    readonly fromsLayoutvar: Locator;
    readonly datepickervar:Locator

    constructor(page:Page)
    {
        this.page= page;
        this.formsvar=this.page.locator('//a[@title="Forms"]');
        this.fromsLayoutvar=this.page.locator('//a[@title="Form Layouts"]');
        this.datepickervar= this.page.locator('//a[@title="Datepicker"]');
    }
    async forms()
    {
       await this.formsvar.click();
        await this.fromsLayoutvar.click();
        await this.datepickervar.click();
    }
    async modalAndOverlays()
    {

    }
    async auth(){

    }
}