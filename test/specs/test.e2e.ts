import { expect } from '@wdio/globals'
import LoginPage from '../../y/login.page.js'
import SecurePage from '../../y/secure.page.js'

describe('My Login application', () => {
    it('should contains text', async () => {
        const element = await driver.$('id=com.bitbar.testdroid:id/radio2');
        await expect(element).toHaveText('Ask mom for help');
    })
})

