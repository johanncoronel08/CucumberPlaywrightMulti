import { Locator, Page } from "@playwright/test";

export class pagelocator {
    botonDoc : Locator
    intro : Locator
    guides : Locator




    constructor(paginavariable:Page){
        this.botonDoc = paginavariable.locator('xpath=//a[contains(text(),"Documentation")]')
        this.intro = paginavariable.locator('xpath=//h1[contains(text(),"Introduction")]')
        this.guides = paginavariable.locator('xpath=(//a[contains(text(),"Guides")])[1]')
    } 

}