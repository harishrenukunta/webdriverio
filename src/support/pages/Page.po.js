class Page{
    constructor(){}
    open(url){
        browser.url(url);
        return this;
    }
}
export default Page;