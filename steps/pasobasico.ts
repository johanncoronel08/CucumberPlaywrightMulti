import { Given, Then, When } from "@cucumber/cucumber";
import { pagelocator } from "../pages/pagina";
import { driver } from "../config/driver";
import { expect } from "@playwright/test";

let paginaConetor 

Given("Ingreso a la URL {string}",{timeout:90000}, async (url) =>{
paginaConetor = new pagelocator(driver.page)
driver.page.goto(url,{waitUntil:"load",timeout:90000})
})

When('Valido que estoy en la URL correcta {string}',{timeout:90000}, async (urlcreada) => {
    await expect(driver.page).toHaveURL(urlcreada)
    await driver.page.waitForTimeout(60000)
})

When('hago click en Documentacion', {timeout:50000},async () => {
    await paginaConetor.botonDoc.click()
    await driver.page.waitForTimeout(5000)
  })


Then('Valido que estoy en documentacion',{timeout:50000},async () => {
  await expect(paginaConetor.intro).toBeVisible()
  await driver.page.waitForTimeout(50000)
})

When('hago click en guides',{timeout:50000}, async () => {
  await paginaConetor.guides.click()
  await driver.page.waitForTimeout(50000)
})

Then('Valido que estoy en guides',{timeout:50000}, async() => {
  await expect(driver.page).toHaveURL("https://www.whatismybrowser.com/guides/")
  await driver.page.waitForTimeout(50000)
})







