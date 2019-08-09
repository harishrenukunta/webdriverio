import {Given, When, Then} from 'cucumber';
import home from '../support/pages/home.po'

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
        browser.pause(3000);
    }
    
);

When(/^navigate to new mortgage rates page$/, function(){
    console.log('Navigated to mortgages page');
    mortgageRatesPage = home.goto('New Mortgage Rates');
    browser.pause(2000);

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

    browser.pause(2000);
    
});

Then(/^verify mortgage choices for below periods returned:$/, function(expectedFixedTermOptions){
    const expectedFixedTermOptionsMap = expectedFixedTermOptions.hashes();
    let expectedFixedTermOptionsAsArr = [];
    const actualFixedTermOptions = mortgageRatesPage.getFixedTermOptions();
    for(let expectedFixedTermOption of expectedFixedTermOptionsMap){
        expect(actualFixedTermOptions).to.be.an('array').that.includes(expectedFixedTermOption.FixedTerm);
    }    
    browser.pause(2000);
});

When(/^choose to display only (fixed|tracker) mortgage and with (fee|no fee)$/, function(mortType, withFee){
    mortgageRatesPage
    .showMortgageType(mortType)
    .showMortgageWithFee(withFee);

    browser.pause(2000);
});

When(/^opt for a (\\d+ yr fixed|\\d+ yr tracker) mortgage$/, function(mortgageTypeToSelect){
    mortgageRatesPage
        .applyMortgage(mortgageTypeToSelect);
});
