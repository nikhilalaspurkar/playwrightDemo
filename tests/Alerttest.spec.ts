import test from "@playwright/test";
import {AlertPage} from '../PageObjects/AlertPage';


test.describe("test alert", ()=>{

    test.beforeEach("launch app for alertcheck", async({page}) =>{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        page.on("dialog", dialog=> {dialog.accept()});
        
    })

    test("click to open dialog", async({page})=> {
        const ObjAlertPage = new AlertPage(page);
        await ObjAlertPage.handlealert();
    
    })

    

})