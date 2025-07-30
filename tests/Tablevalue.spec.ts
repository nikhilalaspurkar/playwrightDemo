import test from "@playwright/test";
import { Tablevalue} from "../PageObjects/TablevaluePage";
test.describe("Table test", () =>{

    test.beforeEach("launch the app for table", async({page})=>{

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await page.waitForLoadState('networkidle');
    });

    test("check the table value", async({page})=>{
        const obj= new Tablevalue(page);
        await obj.verifyvaue();
    })
    test("element displayed exmple", async({page})=> {
        const obj= new Tablevalue(page);
        await obj.verifyElementdisplayed();

    })

})