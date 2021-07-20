const assert = require('assert');
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
const rundomNumber = () => Math.floor(Math.random()*10000).toString();
// перехід по урлу
describe('New clinic:', function () {

  it('should be able to add new clinic', async function (){
       await browser.setWindowSize(1440, 960);
        await browser.url('http://46.101.234.121/sign-in');

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

    await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/doctors';
        },
        { timeout: 5000 },
      );

      const ClinicsButton = await $('.link_link__3zEN3=Clinics');
      await ClinicsButton.click();
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/clinics';
        },
        { timeout: 5000 },
      );
  

// натиснути кнопку Add
    const AddClinics = await  $('.styles_clinicsPageWrapper__1lCsn .styles_btn___s1BB');

    await AddClinics.waitForDisplayed({ timeout: 5000 });
    await AddClinics.click();


    await browser.waitUntil(
        async function () {
          const AddClinicForm = await $('.styles_container__pnjAI');
          if(AddClinicForm){
            return true
          } else {
            return false
          }
        },
        { timeout: 5000 },
      );

// заповнити данні
    const clinicnameField = await $('input[name="name"]');
    const clinicnameFieldValue = `Dobrobut Clinic ${rundomNumber()}`;
    const addressField = await $('input[name="address"]');
    const addressFieldValue = `Svyatoshinska Address ${rundomNumber()}`;

    
    const ddls = await $$('.styles_container__pnjAI .selectStyles__control');

    const status = ddls[1];
    const city = ddls[1];

    const statusOption = await $('div.selectStyles__option=state');     
    const cityOption = await $('div.selectStyles__option=New York, NY')

    const addClinicButton = await $('.styles_container__pnjAI button.styles_btn___s1BB');
    
    await clinicnameField.waitForDisplayed({ timeout: 5000 });
    await clinicnameField.setValue(clinicnameFieldValue);


    await addressField.waitForDisplayed({ timeout: 5000 });
    await clinicFormAddress.setValue(addressFieldValue);
       
    await status.waitForDisplayed({ timeout: 5000 });
    await status.click();
    await statusOption.waitForDisplayed({ timeout: 5000 });
    await statusOption.click();
 
    await city.waitForDisplayed({ timeout: 5000 });
    await city.click();
    await cityOption.waitForDisplayed({ timeout: 5000 });
    await cityOption.click();
  
    await addClinicButton.waitForDisplayed({ timeout: 5000 });
    await addClinicButton.click();

    await browser.reloadSession();


});

});
