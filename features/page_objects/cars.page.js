import {Page} from './main.page';

class Cars extends Page {
    get puLocation() {return browser.element('#select2-drop > div > input')}; 
    get dropLocation() {return browser.element('#select2-drop > div > input')};
    get startDate() {return browser.element('#departcar')};
    get startTime() {return browser.element('#cars > form > div:nth-child(4) > div > select')};
    get endDate() {return browser.element('#returncar')};
    get endTime() {return browser.element('#cars > form > div:nth-child(6) > div > select')};
};

export default new Cars();