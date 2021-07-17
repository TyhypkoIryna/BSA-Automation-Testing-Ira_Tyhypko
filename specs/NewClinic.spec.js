const assert = require('assert');
const {expect} = require('chai')
//  Тест на додавання нової клініки
// [x] перехід по урлу
// [x] заповнити форму
// [x] натиснути кнопку увійти
// [x] натиснути кнопку Clinics
// [x] натиснути кнопку додавання клініки
// [x] заповнити данні
// [x] натиснути кнопку Add
// [x] перевірка результату

// перехід по урлу
describe('SignIn:', function () {
  it('should be able to add new clinic', async function (){
    await browser.setWindowSize(1440, 960);
    await browser.url('http://46.101.234.121/sign-in');

// заповнити форму 
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signUpButton = await $('button');


    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

// натиснути кнопку Clinics
    const Clinics = await $('//a[contains(text(), "Clinics")]');

    await Clinics.waitForDisplayed({ timeout: 5000 });
    await Clinics.click();

// натиснути кнопку Add
    const AddClinics = await $('button.styles_primary-dark__1WnyR');

    await AddClinics.waitForDisplayed({ timeout: 5000 });
    await AddClinics.click();

// заповнити данні
    const clinicnameField = await $('input[name="name"]');
    const addressField = await $('input[name="address"]');

    await clinicnameField.waitForDisplayed({ timeout: 5000 });
    await clinicnameField.setValue('Dobrobut');

    await addressField.waitForDisplayed({ timeout: 5000 });
    await addressField.setValue('Svyatoshinska Street, 3');

    const ddls = await $$('div.selectStyles__option');

    const statusDdl = ddls[0];
    const cityDdl = ddls[2];

    const fstatusOption = await $('div.selectStyles__option=privatee');
    const cityOption = await $('div.selectStyles__option=San Francisco, CA')

    // натиснути кнопку Add
    const ddls = await $$('button.styles_primary-dark__1WnyR');

    const Buttons = await $$('button.styles_primary-dark__1WnyR');
    const AddButton = Buttons[1];

    await AddButton.waitForDisplayed({ timeout: 5000 });
    await AddButton.click();


    await EditButton.waitForDisplayed({ timeout: 5000 });
    await EditButton.click();


    // перевірка результату
await browser.waitUntil( 
  async function () {
    const url = await browser.getUrl();
    return url === 'http://46.101.234.121/clinics';
  },
  { timeout: 5000 },
);

const url = await browser.getUrl();
expect(url).to.be.eql('http://46.101.234.121/clinics');

await browser.reloadSession();
});

});