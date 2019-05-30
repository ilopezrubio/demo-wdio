export class Page {
    constructor() {
    }
<<<<<<< HEAD
    get hotels() {return browser.element('span.hidden-xs:nth-child(4)');}
    get flights() {return browser.element('.nav-tabs > li:nth-child(2) > a:nth-child(1) > span:nth-child(3)');}
    get tours() {return browser.element('li.text-center:nth-child(3) > a:nth-child(1) > span:nth-child(3)');}
    get cars() {return browser.element('li.text-center:nth-child(4) > a:nth-child(1) > span:nth-child(3)');}
    get serch() {return browser.element('button.btn-lg:nth-child(3)');}

}

=======

    get hotelillos () { return browser.element('//*[@id="body-section"]/section/div[2]/div/div/div[2]/ul/li[1]/a'); }
    get vuelillos () { return browser.element('//*[@id="body-section"]/section/div[2]/div/div/div[2]/ul/li[2]'); }
    get toursillos () { return browser.element('//*[@id="body-section"]/section/div[2]/div/div/div[2]/ul/li[3]'); }
    get carsillos () { return browser.element('//*[@id="body-section"]/section/div[2]/div/div/div[2]/ul/li[4]'); }
    get searchbtnillo () { return browser.element('//*[@id="flights"]/form/div[6]/button'); }

}
<<<<<<< HEAD
>>>>>>> se agregan 5 selectors
=======
>>>>>>> Added 5 selectors
