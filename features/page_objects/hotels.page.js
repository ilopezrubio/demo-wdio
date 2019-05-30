import { Page } from "./main.page";

class Hotels extends Page {
  constructor() {}
  get hotelSearch() {
    return browser.element('//*[@id="select2-drop"]/div/input');
  }
  get checkInDate() {
    return browser.element('//*[@id="dpd1"]/div/input');
  }
  get checkInNextMonthBtn() {
    return browser.element("/html/body/div[10]/div[1]/table/thead/tr[1]/th[3]");
  }
  get checkInDayBtn() {
    return browser.element(
      "body > div:nth-child(14) > div.datepicker-days > table > tbody > tr > td:not(.disabled):not(.old)"
    );
  }
  get checkOutDate() {
    return browser.element('//*[@id="dpd2"]/div/input');
  }
  get checkOutNextMonthBtn() {
    return browser.element("/html/body/div[11]/div[1]/table/thead/tr[1]/th[3]");
  }
  get checkOutDayBtn() {
    return browser.element(
      "body > div:nth-child(15) > div.datepicker-days > table > tbody > tr > td:not(.disabled):not(.old)"
    );
  }
  get travellersInput() {
    return browser.element('//*[@id="travellersInput"]');
  }
  get travellersAdultsInp() {
    return browser.element('//*[@id="adultInput"]');
  }
  get travellersChildsInp() {
    return browser.element('//*[@id="childInput"]');
  }
  get search() {
    return browser.element('//*[@id="hotels"]/form/div[5]/button');
  }
}

export default new Hotels();
