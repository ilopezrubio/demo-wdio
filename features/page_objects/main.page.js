export class Page {
    constructor() {}

        get hotels() {return browser.element('span.hidden-xs:nth-child(4)');}
        get flights() {return browser.element('.nav-tabs > li:nth-child(2) > a:nth-child(1) > span:nth-child(3)');}
        get tours() {return browser.element('li.text-center:nth-child(3) > a:nth-child(1) > span:nth-child(3)');}
        get cars() {return browser.element('li.text-center:nth-child(4) > a:nth-child(1) > span:nth-child(3)');}
        get search() {return browser.element('button.btn-lg:nth-child(3)');}

}

