import test from "@playwright/test";

test("Test A", {tag: ["@Smoke", "@High"]}, async ({}) =>{
console.log("test a");
});

test ("Test B",{tag: ["@sanity", "@High"]}, async() => {
    console.log("test b")
})