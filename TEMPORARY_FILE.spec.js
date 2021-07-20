const {expect} = require('chai');
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
describe('New clinic:', function () {
    beforeEach(async function(){
        await browser.setWindowSize(1440, 960);
        await browser.url('http://46.101.234.121/sign-in');
      });
      this.afterEach(async function(){
        await browser.reloadSession();
      });


  it('should be able to add new clinic', async function (){

// заповнити форму 
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');


    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

// натиснути кнопку увійти
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click(); 



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
    await clinicnameField.waitForDisplayed({ timeout: 5000 });
    await clinicnameField.setValue('Dobrobut');

    const addressField = await $('input[name="address"]');
    await addressField.waitForDisplayed({ timeout: 5000 });
    await addressField.setValue('Svyatoshinska Street, 3');

    const ddls = await $$('div.selectStyles__control');

    const status = ddls[1];
    const city = ddls[1];
       
    const state = await $('div.selectStyles__option=state');
    await status.click();
    await state.waitForDisplayed({ timeout: 5000 });
    await state.click();
 
      
    const newYork = await $('div.selectStyles__option=New York, NY')
    await city.click();
    await newYork.waitForDisplayed({ timeout: 5000 });
    await newYork.click();

      
    const addClinicButton = await $('div.styles_submitBtn__jK6DU > button');
    await addClinicButton.waitForDisplayed({ timeout: 5000 });
    await addClinicButton.click();

});

});
