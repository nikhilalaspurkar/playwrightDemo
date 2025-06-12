import test from "@playwright/test";

test.describe("smoke testing", ()=>{

    test ('Test1', async ({page}) => {
        console.log("test1 executed");
    })

    test ('Test2', async ({page}) => {
        console.log("test2 excuted");
    })


})

test.describe("sanity testing", ()=> {

    test("Test3", async ({page}) => {
        console.log("test 3 executed");
    })

    test ("test3", async({page}) => {
        console.log("Test 4 executed")
    })
})

