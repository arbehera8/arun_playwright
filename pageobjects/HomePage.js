export  class HomePage
  {
     constructor(page)
     {
             this.page=page
             this.registerLink=page.locator("//a[normalize-space()='Register']")
     }

      async goTo()
      {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
      }

       async clickOnRegisterLink()
       {
          await this.registerLink.click()
       }
  }