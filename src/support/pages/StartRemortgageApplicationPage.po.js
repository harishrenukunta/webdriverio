class StartRemortgageApplicationPage{
    constructor(){}

    getPageHeader(){
        return $('div#pageBody h1.blue.boldText').getText();
    }
}

export default new StartRemortgageApplicationPage();