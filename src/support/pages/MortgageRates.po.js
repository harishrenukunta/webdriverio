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
                this._yesMortgageExist.waitForEnabled(10000);
                this._yesMortgageExist.click();
            }else{
                console.log('No mortgage click');
                this._noMortgageExist.waitForEnabled(10000);
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

    get _mortgageOptionsSelector(){
        return '#NewMortgageRateTables div.ratesTableBody';
    }

    getMortgageOptionsText(){
        let mortgageOptionsText = [];
        const mortgageOptions = this.getMortgageOptions();
        for(let mortgageOption of mortgageOptions){
            mortgageOptionsText.push(this.getMortgageOptionText(mortgageOption));
        }
        return mortgageOptionsText;
     }

     getMortgageOptions(){
         return $$(this._mortgageOptionsSelector);
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

     getMortgageOptionText(mortgageOption){
        return mortgageOption.$$('table tbody tr[data-product-code] > th.notOnMobile > h3')[0].getText();  
     }

     getToMoreInfoAndApplyForMortgageOption(mortgageOption){
        return mortgageOption.$$('table tbody tr[data-product-code] > th.showHideCell > a')[0];
     }

     getToApplyMortgageOption(mortgageOption){
        return mortgageOption.$$('table tbody tr div.applyButton > a')[0];
     }

     applyMortgage(mortgageTypeTerm){
        const mortgageOptions = this.getMortgageOptions(); 
        let foundTerm=false;

        for(let mortgageOption of mortgageOptions){
            const mortgageOptionText = this.getMortgageOptionText(mortgageOption);
            if(mortgageOptionText.toLowerCase() === mortgageTypeTerm){
                foundTerm = true;
                let elem = this.getToMoreInfoAndApplyForMortgageOption(mortgageOption);
                elem.scroll(10,10);
                elem.click();
                browser.pause(2000);
                this.getToApplyMortgageOption(mortgageOption).click();
                break;
            }
        }
        return foundTerm;
     }

     selectCheckBox(checkkBoxId, checkState){
         browser.execute(function(chkBoxId, chkState){
             document.getElementById(chkBoxId).checked = chkState;
         }, checkkBoxId,checkState);
     }
}

export default new MortgageRatesPage();