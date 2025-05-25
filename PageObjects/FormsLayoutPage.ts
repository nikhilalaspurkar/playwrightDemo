import { Locator, Page } from "@playwright/test";

//which method/functionality: basic forms ,inline form

export class FormsLayoutPage
 {
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly submitButton: Locator;
    readonly formsLayout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formsLayout = page.locator('//a[@title="Form Layouts"]');
        this.name = page.locator('//form[@class="form-inline ng-untouched ng-pristine ng-valid"]/input'); //name locator
        this.email = page.locator('//form[@class="form-inline ng-untouched ng-pristine ng-valid"]/input'); //email 
        this.submitButton = page.locator('//form[@class="form-inline ng-untouched ng-pristine ng-valid"]/button'); //submit button
    }
    /**
     * 
     * @param Username : this is fullname
     * @param useremail : this is randomly genrated email
     */
    async inlineForm(Username:string, useremail:string) {
        await this.formsLayout.click();
        await this.name.first().fill(Username);
        await this.email.last().fill(useremail);
        await this.submitButton.click();
    }

}