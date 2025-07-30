const { test, expect } = require("@playwright/test");

// for API testing we use "request" fixture

test.only("Get users", async ({request}) => {

   const response =  await request.get('https://reqres.in/api/users?page=2');
   console.log(await response.json());
   expect(response.status()).toBe(200);
}) 

test("create users", async ({request}) => {
    
    
}) 


test("Update users", async ({request}) => {
    
}) 

test("Delete users", async ({request}) => {
    
}) 


