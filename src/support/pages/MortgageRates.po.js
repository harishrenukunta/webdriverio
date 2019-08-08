class MortgageRatesPage{
    constructor(){
       // this._noMortgageExist = $('#selectorItemHaveNationwideMortgage1');
       // this._yesMortgageExist = $('#selectorItemHaveNationwideMortgage0');
    }

    get yesMortgageExist(){
        return $('#selectorItemHaveNationwideMortgage0');
    }
    get noMortgageExist(){
        return $('#selectorItemHaveNationwideMortgage1');
    }

    haveNationWideMortgage(isMortgagePresent){
            if(isMortgagePresent === 'Yes'){
                this.yesMortgageExist.click();
            }else{
                console.log('No mortgage click');
                this.noMortgageExist.click();
            } 
            return this;
    }

    



}

export default new MortgageRatesPage();