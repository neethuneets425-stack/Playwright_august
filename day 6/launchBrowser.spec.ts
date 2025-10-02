import test, { chromium } from '@playwright/test'

test('Launching browsers',async ()=>{

    const browser= await chromium.launch({headless:false})
    const context= await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.google.com')
})