class MortgageRatesPage{
    constructor(){
       // this._noMortgageExist = $('#selectorItemHaveNationwideMortgage1');
       // this._yesMortgageExist = $('#selectorItemHaveNationwideMortgage0');
    }

    haveNationWideMortgage(isMortgagePresent){
            isMortgagePresent === 'Yes' ? this._yesMortgageExist.click() : this._noMortgageExist.click();
            return this;
    }
}

export default new MortgageRatesPage();