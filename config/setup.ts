import { After, AfterStep, Before } from "@cucumber/cucumber"
import { driver } from "./driver"
import { Platform } from "../utils/metaclass"



AfterStep(async function (scenario) {
    const buffer = await driver.page.screenshot()
    this.attach(buffer, { mediaType: "image/png", fileName: scenario.pickleStep.text })
})


Before({timeout:90000} ,async (scenario) =>
    
    { 
        let plataforma = Platform.CHROME
        let scenarioId = scenario.gherkinDocument.feature!.children.findIndex(sc => sc.scenario?.name === scenario.pickle.name);
        let tagsNavegadores = ["@chrome", "@firefox","@edge","@safari"]
        let tag = scenario.gherkinDocument.feature?.children[scenarioId].scenario?.tags.find(tag => tagsNavegadores.includes(tag.name))
        if (tag?.name == "@edge") {
            plataforma = Platform.EDGE

        } else if (tag?.name == "@safari"){
            plataforma = Platform.SAFARI

        }else if (tag?.name == "@firefox"){
            plataforma = Platform.FIREFOX
        }
    

        await driver.init(plataforma)
    })


After(async () => {
    await driver.browser.close()
})    