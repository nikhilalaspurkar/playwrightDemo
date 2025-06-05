import test, { expect } from "@playwright/test";
import { NavigationPage } from "../PageObjects/NavigationPage";
import { FormsLayoutPage } from "../PageObjects/FormsLayoutPage";
import {faker} from "@faker-js/faker";


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard'); //open the url
})

test("click on forms", async ({ page }) => {
    // await page.goto('http://localhost:4200/pages/iot-dashboard');
    // await page.locator('//a[@title="Forms"]').click(); //click on forms
    // await page.locator('//a[@title="Form Layouts"]').click(); // click on Forms layout
    // await page.locator('//a[@title="Datepicker"]').click(); //click on date picker

    const objNavigationPage = new NavigationPage(page);
    await objNavigationPage.forms();

})
test("click on inline form", async ({ page }) => {
    const navigationobj = new NavigationPage(page);
    await navigationobj.forms();
    const formslayoutObj = new FormsLayoutPage(page);
    const randomname = faker.person.fullName();
    const randomemail= `${randomname}${faker.number.int(100)}@test.com`;

   await formslayoutObj.inlineForm(randomname, randomemail);

   //inserting intensional failuer
   await expect(page).toHaveTitle("non existing title");

})

test.afterEach(async({page}, testInfo)=>{
 if(testInfo.status=='failed')
 {
  await page.screenshot({path: 'Screenshot/onfailuer.png'});  
 }
})