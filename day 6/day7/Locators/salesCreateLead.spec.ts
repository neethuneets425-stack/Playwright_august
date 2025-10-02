import test,{chromium, expect} from '@playwright/test'
test('createIndividuals',async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill('vidyar@testleaf.com')
    await page.locator('#password').fill('Sales@123')
    await page.locator("[name='Login']").click()
    await page.locator("//div[@class='slds-r5']").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.locator(`text='Sales'`).click()
    await page.locator("//a[@title='Leads']").click()
    await page.locator("//div[@title='New']").click()
    await page.locator("[name='salutation']").click()
    await page.locator("//span[@title='Mr.']").click()
    await page.locator("[name='lastName']").fill('AAYANSH')
    await page.locator("[name='SaveEdit']").click()
    
})