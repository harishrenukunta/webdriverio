import {Given, When} from 'cucumber';
import home from '../support/pages/home.po'
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
    home.goto('New Mortgage Rates');
    browser.pause(2000);

});

When(/^find mortgage rate by providing below information:$/, function(mortgageInfoTable){
    const mortgageInfoMap = mortgageInfoTable.hashes();
    console.log(`Exists:${typeof mortgageInfoMap}`);
});
