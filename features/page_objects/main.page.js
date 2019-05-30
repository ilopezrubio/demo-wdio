export class Page{
    constructor(){

    }
<<<<<<< HEAD
    get hotels() {return browser.element('span.hidden-xs:nth-child(4)');}
    get flights() {return browser.element('.nav-tabs > li:nth-child(2) > a:nth-child(1) > span:nth-child(3)');}
    get tours() {return browser.element('li.text-center:nth-child(3) > a:nth-child(1) > span:nth-child(3)');}
    get cars() {return browser.element('li.text-center:nth-child(4) > a:nth-child(1) > span:nth-child(3)');}
    get serch() {return browser.element('button.btn-lg:nth-child(3)');}

=======

    get a_hotels(){
        return browser.element("//a[normalize-space()='Hotels']");
    }
    get a_flights(){
        return browser.element("//a[normalize-space()='Flights']");
    }
    get a_tours(){
        return browser.element("//a[normalize-space()='Tours']");
    }
    get a_cars(){
        return browser.element("//a[normalize-space()='Cars']");
    }
    get btn_search(){
        return browser.element("//button[@class='btn btn-lg btn-block btn-primary pfb0 loader']");
    }
>>>>>>> My brach
}

