import Page from './Page.po';
import mortgageRatesPage from './MortgageRates.po';

class Home extends Page{
    constructor(){
        super();
    }

    goto(page){
        if(page === 'New Mortgage Rates'){
            browser.moveToObject('=Mortgages');
            const mortgageRatesLnk = $('a*=Mortgage rates');
            mortgageRatesLnk.waitForVisible();
            mortgageRatesLnk.click();
            return mortgageRatesPage;
        }
    }
}

export default new Home();