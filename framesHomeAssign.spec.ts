import test,{expect,chromium}from '@playwright/test'
test('frames',async({page})=>{
await page.goto("https://leafground.com/frame.xhtml")
const frameCount=page.frames()
console.log("The Frame Count is " + frameCount.length)
const frame=frameCount[1]
const beforeClick= await frame.locator("#Click").innerText()
console.log("The Text before click is "+ beforeClick)
frame.locator('#Click').click()
const afterClick= await frame.locator("#Click").innerText()
console.log("The Text after click is "+ afterClick)
//expect(afterClick).toContain("Hurray! You Clicked Me.")


//Nested Frames
const beforeNested=await page.frameLocator('(//iframe)[3]').frameLocator('(//iframe)[1]').locator('#Click').last().innerText()
console.log("The Nested Frame before click is "+beforeNested)
await page.frameLocator('(//iframe)[3]').frameLocator('(//iframe)[1]').locator('#Click').last().click()
const afterNested=await page.frameLocator('(//iframe)[3]').frameLocator('(//iframe)[1]').locator('#Click').last().innerText()
console.log("The Nested Frame after click is "+afterNested)
expect(afterNested).toContain("Hurray! You Clicked Me.")
}) 