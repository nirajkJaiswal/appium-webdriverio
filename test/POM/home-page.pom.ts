import waitUntil from "../../node_modules/webdriverio/build/commands/browser/waitUntil";

export class BaseHomePage{

    protected btnHome():WebdriverIO.Element
    {
        return $('//android.widget.TextView[@resource-id="com.amazon.avod.thirdpartyclient:id/FilterTab1"]');
    }
    getHomeLabel():string{
        return this.btnHome().getText();
    }
    waitForPageLoad()
    {
       browser.waitUntil(()=> this.btnHome().isDisplayed(),
       {
        timeout: 20000,
        timeoutMsg: 'Page not loaded'
       })
    }
    isHomeButtonDisplayed():boolean{
        return this.btnHome().isDisplayed();
    }
}