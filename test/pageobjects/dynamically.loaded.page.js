const DynamicLoadingPage = require('./dynamic_loading.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadedPage extends DynamicLoadingPage {
    /**
     * define selectors using getter methods
     */
    async notexist(test){
        it(test.text, async () => {
            await this.open(test.path);
           
            
            var elem= await $(test.element)
          while(!await elem.isExisting()){
                await browser.pause(200)
                console.log(test.text)
                
                
            }
            //await browser.saveScreenshot('./screenshot/screenshot.png');
            
        });
        
    }

    
    
}

module.exports = new DynamicLoadedPage();