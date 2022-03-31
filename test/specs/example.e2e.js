const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DynamicLoadedPage=require('../pageobjects/dynamically.loaded.page')

describe('My Login application', () => {
   
        DynamicLoadedPage.notexist({path:'dynamic_loading/2',element:'#finish h4',text:"the h4 is currently not visible" })

       
   
});


