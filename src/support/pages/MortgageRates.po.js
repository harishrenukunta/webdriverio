class MortgageRatesPage{
    constructor(){
       // this._noMortgageExist = $('#selectorItemHaveNationwideMortgage1');
       // this._yesMortgageExist = $('#selectorItemHaveNationwideMortgage0');
    }

    get _yesMortgageExist(){
        return $('#selectorItemHaveNationwideMortgage0');
    }
    get _noMortgageExist(){
        return $('#selectorItemHaveNationwideMortgage1');
    }

    get _mortgageType_changeLender(){
        return $('#selectorItemNationwideMortgageTypeNo2');
    }

    get _mortgageType_movingHome(){
        return $('#selectorItemNationwideMortgageTypeNo1');
    }

    get _mortgageType_firstHome(){
        return $('#selectorItemNationwideMortgageTypeNo0');
    }
    get _propertyValue(){
        return $('#SearchPropertyValue');
    }

    get _mortgageAmount(){
        return $('#SearchMortgageAmount');
    }

    get _term(){
        return $('#SearchMortgageTerm');
    }

    get _findMortgageRate(){
        return $('#myButton');
    }


    haveNationWideMortgage(isMortgagePresent){
            if(isMortgagePresent === 'Yes'){
                this._yesMortgageExist.click();
            }else{
                console.log('No mortgage click');
                this._noMortgageExist.click();
            } 
          return this;
    }

    

    mortgageType(mortgageType){
        switch(mortgageType){
            case "Changing lender":
                this._mortgageType_changeLender.click();
                break;
            case "Moving home":
                this._mortgageType_movingHome.click();
                break;
            case "First home":
                this._mortgageType_firstHome.click();
                break;
        }
        console.log(`Selected mortgage type:${mortgageType}`);
        return this;
    }

    propertyValue(propValue){
        this._propertyValue.setValue(propValue);
        return this;
    }

    mortgageAmount(mortgageAmt){
        this._mortgageAmount.setValue(mortgageAmt);
        return this;
    }

    term(mortgageTerm){
        this._term.setValue(mortgageTerm);
        return this;
    }

    findMortgageRate(){
        this._findMortgageRate.click();
        return this;
    }

    getFixedTermOptions(){
        let fixedTermOptions = [];
        const mortgageOptions = $$('#NewMortgageRateTables div.ratesTableBody');
        const mortgageOptionsCount = mortgageOptions.length;
        console.log(`Total mortgage options:${mortgageOptionsCount}`);
        for(let i=0; i < mortgageOptionsCount; i++){
            const period = mortgageOptions[i].$$('table tbody tr[data-product-code] > th.notOnMobile > h3');
            fixedTermOptions.push(period[0].getText());
        }
        return fixedTermOptions;
     }

     showMortgageType(mortType){
         
         switch(mortType){
             case "fixed":
                this.selectCheckBox('input-fixed', true);
                 break;
             case "tracker":
                 this.selectCheckBox('input-tracker', true);
                 break;
         }
         console.log(`About to select:${mortType}`);
         return this;
     }

     showMortgageWithFee(withFee){
         switch(withFee){
             case "fee":
                 this.selectCheckBox('product-fee-input-fee', true);
                 break;
            case "no fee":
                this.selectCheckBox('product-fee-input-nofee', true);
                break;
         }
         return this;
     }

     applyMortgage(mortgageTypeTerm){
         
     }

     selectCheckBox(checkkBoxId, checkState){
         browser.execute(function(chkBoxId, chkState){
             document.getElementById(chkBoxId).checked = chkState;
         }, checkkBoxId,checkState);
     }
}

export default new MortgageRatesPage();