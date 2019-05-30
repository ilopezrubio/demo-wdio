import {Page} from './main.page';

class Tours extends Page{
    get CityName(){return browser.element('//*[@id="select2-drop"]/ul/li[1]/ul/li[4]');}
    get Date(){return browser.elements('//div/table/tbody/tr/td[@class="day"]')}
    get Guest(){return browser.element('///input[@id="travellersInput"]')}
    get minusAdult(){return browser.element('//button[@id="adultMinusBtn"]')}
    get plusAdult(){return browser.element('//button[@id="adultPlusBtn"]')}
    get minusChild(){return browser.element('//button[@id="childMinusBtn"]')}
    get plusChild(){return browser.element('//button[@id="childPlusBtn"]')}

}

export default new Tours();

