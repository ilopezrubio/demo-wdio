import { Page } from './main.page';

class Flights extends Page {

    get departure () { return browser.element('#select2-drop > div > input'); }
    get arrival () { return browser.element('#select2-drop > div > input'); }
    get departureDate () { return browser.element('#flights > form > div:nth-child(3) > div > input'); }
    get departureTable () { return browser.element('body > div:nth-child(19) > div.datepicker-days > table > tbody'); }
    get departureNext () { return browser.element('body > div:nth-child(19) > div.datepicker-days > table > thead > tr:nth-child(1) > th.next'); }
    get totalPassengers () { return browser.element('#flights > form > div.col-md-1.form-group.go-right.col-xs-12 > div > input'); }

}

export default new Flights();
