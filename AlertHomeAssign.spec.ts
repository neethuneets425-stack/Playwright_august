import test,{expect}from'@playwright/test'
test("Alert handling with frame locator",async({page})=>{
    //await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    
    await page.locator("//button[text()='Try it']").click
    page.once("dialog",alertType=>{
        const type=alertType.type()
        console.log(type)
        const message=alertType.message()
        console.log(message)
        alertType.accept()
    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")



    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()

    // await page.waitForTimeout(5000)
    await expect(page.frameLocator("//iframe[@id='iframeResult']").locator("//p[@id='demo']")).toContainText("OK")
    
})