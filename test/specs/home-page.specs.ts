import { BaseHomePage } from "../POM/home-page.pom";



let homepage: BaseHomePage;
describe('Amazon prime Home page: ', () => {
    before('', () => {
        homepage = new BaseHomePage();
        homepage.waitForPageLoad();
    })
    it('Verify home button displayed', () => {

        expect(homepage.isHomeButtonDisplayed());
    })    
})