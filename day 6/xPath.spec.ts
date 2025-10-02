import test, {chromium} from '@playwright/test'
test ('Login Page',async()=>{
const browser= await chromium.launch({headless:false,channel:'chrome'})
const context= await browser.newContext()
const page=await context.newPage()
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("//input[@id='username']").fill("dilip@testleaf.com")
await page.locator("//input[contains(@class,'pass')]").fill("Leaf@2025")
await page.locator("//input[@type='submit']").click()
await page.waitForTimeout(6000)
const title= await page.title()
console.log(title)
}
)