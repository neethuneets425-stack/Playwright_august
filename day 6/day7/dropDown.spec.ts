import test, {chromium} from '@playwright/test'
test('select dropdown',async({page})=>{
        await page.goto('https://www.telerik.com/contact')
        await page.selectOption('[name=DropdownListFieldController_0]',{index:3})
        await page.waitForTimeout(3000)
        await page.selectOption('#Dropdown-2',{value:'DevCraft'})
        await page.waitForTimeout(3000)
        await page.selectOption('#Country-1',{label:'Andorra'})
        await page.waitForTimeout(3000)

    })
