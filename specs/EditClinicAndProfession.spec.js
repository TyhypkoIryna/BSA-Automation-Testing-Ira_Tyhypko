const assert = require('assert');
const {expect} = require('chai')
//  Тест на зміну спеціальності та клініки для доктора.
// [x] перехід по урлу
// [x] заповнити форму
// [x] натиснути кнопку увійти
// [x] натиснути кнопку Мій профіль
// [x] розгорнути чек бокс Select Specialty:
// [x] вибрати Dentist
// [x] натиснути кнопку Save біля вибору спеціальності
// [x] розгорнути чек бокс Select Clinic:
// [x] вибрати ....
// [x] натиснути кнопку Save біля вибору клініки
// [x] перевірка результату

// перехід по урлу
describe('SignIn:', function () {
  it('should be able to Edit Clinic And Profession', async function (){
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

// натиснути кнопку увійти
    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

// натиснути кнопку Мій профіль
    const MyProfile = await $('//a[contains(text(), "My Profile")]');

    await MyProfile.waitForDisplayed({ timeout: 5000 });
    await MyProfile.click();

// розгорнути чек бокс Select Specialty:
const ddls = await $$('div.selectStyles__control');

const SpecialtyDdl = ddls [2];

const DentistOption = await $('div.selectStyles__control=dentist');

await DentistOption.waitForDisplayed({ timeout: 5000 });
await SpecialtyDdl.click();
await DentistOption.click();
// натиснути кнопку Save
const ddls = await $$('button.styles_btn___s1BB')

const Buttons = await $$('button.styles_btn___s1BB')
const EditButton = Buttons[2];

await EditButton.waitForDisplayed({ timeout: 5000 });
await EditButton.click();



const ClinicDdl = ddls [29];
const ClinicOption = await $('div.selectStyles__control=Delta');

await ClinicOption.waitForDisplayed({ timeout: 5000 });
await ClinicDdl.click();
await ClinicOption.click();
// натиснути кнопку Save
const ddls = await $$('button.styles_btn___s1BB')

const Buttons = await $$('button.styles_btn___s1BB')
const EditButton = Buttons[3];

await EditButton.waitForDisplayed({ timeout: 5000 });
await EditButton.click();


// перевірка результату
await browser.waitUntil( 
    async function () {
      const url = await browser.getUrl();
      return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
    },
    { timeout: 5000 },
  );
  
  const url = await browser.getUrl();
  expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');

  await browser.reloadSession();

});

});