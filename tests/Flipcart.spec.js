import test from "@playwright/test";
import { Fourninenine } from "../PageObjects/Flippage";

test.beforeEach("launch filipcart app", async({page})=> {
await page.goto("https://www.flipkart.com/");
})

test ("select 499 only", async({page})=>{
    //select lsit of 499 products and click on first item
    const fournineninesec = new Fourninenine(page);
    fournineninesec.selectfirstitem();
})
test ("login page popup", ({page}) =>{ })
