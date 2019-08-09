import {Given, When, Then} from 'cucumber';
import home from '../support/pages/home.po';
import startRemoteApplicatePage from '../support/pages/StartRemortgageApplicationPage.po';

let mortgageRatesPage;
Given(
    /^I open the (url|site) "([^"]*)?"$/, function(urlType, url){
        let navigateTo;
        if(urlType === 'url'){
            navigateTo = url;
        }else{
            navigateTo = url;
        }
        home.open(navigateTo);
        browser.pause(browser.stepTimeOut);
    }
    
);

When(/^navigate to new mortgage rates page$/, function(){
    console.log('Navigated to mortgages page');
    mortgageRatesPage = home.goto('New Mortgage Rates');
    browser.pause(browser.stepTimeOut);

});

When(/^find mortgage rate by providing below information:$/, function(mortgageInfoTable){
    const mortgageInfoMap = mortgageInfoTable.hashes();
    console.log(`mt:${mortgageInfoMap[0].MortgageType} me:${mortgageInfoMap[0].MortgageExists}`);
    mortgageRatesPage
        .haveNationWideMortgage(mortgageInfoMap[0].MortgageExists)
        .mortgageType(mortgageInfoMap[0].MortgageType)
        .propertyValue(mortgageInfoMap[0].PropertyValue)
        .mortgageAmount(mortgageInfoMap[0].MortgageAmount)
        .term(mortgageInfoMap[0].Term)
        .findMortgageRate();
    browser.pause(browser.stepTimeOut);   
});

Then(/^user is offered below mortgage options:$/, function(expectedFixedTermOptions){
    const expectedFixedTermOptionsMap = expectedFixedTermOptions.hashes();
    const actualFixedTermOptions = mortgageRatesPage.getMortgageOptionsText();
    for(let expectedFixedTermOption of expectedFixedTermOptionsMap){
        expect(actualFixedTermOptions).to.be.an('array').that.includes(expectedFixedTermOption.FixedTerm);
    }    
    browser.pause(browser.stepTimeOut);
});

When(/^choose to display only (fixed|tracker) mortgage and with (fee|no fee)$/, function(mortType, withFee){
    mortgageRatesPage
        .showMortgageType(mortType)
        .showMortgageWithFee(withFee);
    browser.pause(browser.stepTimeOut);
});

When(/^opt for a (\d+ yr) (fixed|tracker) mortgage$/, function(mortgageTerm, mortgageType){
    expect(mortgageRatesPage
        .applyMortgage(mortgageTerm + ' ' + mortgageType)).to.be.true;
    browser.pause(2000);
});

Then(/^'(.*)' page shows up$/, function(expectedPageHeader){
    if(expectedPageHeader === 'Start your Remortgage application' ){
        expect(startRemoteApplicatePage.getPageHeader()).to.be.equal(expectedPageHeader);
    }
})
