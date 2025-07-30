import test from "@playwright/test";
import { Orangeloginpage } from "../PageObjects/orangepage"


test.beforeEach("login on orangepage", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

test ("login to orance hcm", async({page})=> {
    const hcmlogin= new Orangeloginpage(page);
    await hcmlogin.loginhrm("Admin", "admin123"); //dont forget to give await
})
