import test from "@playwright/test";
import { userdata } from "../PageObjects/DataStore";

test ("reading data from .ts file", ({page})=>{
    console.log("user name: ", userdata.name);
    console.log("user age: ", userdata.age);
    console.log("user skills: ", userdata.skills);
})