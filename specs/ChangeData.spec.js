const assert = require('assert');
const {expect} = require('chai');
//  Зміна даних в профілі користувача
// [x] перехід по урлу
// [x] заповнити форму
// [x] натиснути кнопку увійти
// [x] натиснути кнопку Мій профіль
// [x] натиснути кнопку редагування
// [x] Змінити прізвище і номер телефону
// [x] натиснути кнопку Редагувати
// [x] перевірка результату

const rundomNumber = () => Math.floor(Math.random()*10000).toString();
// перехід по урлу
describe('Change data:', function () {
  xit('should be able to change data in the user profile', async function (){
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
        //const MyProfile = await $(`=My Profile`); - шукає будь який елемент з цим текстом

    await MyProfile.waitForDisplayed({ timeout: 5000 });
    await MyProfile.click();

// натиснути кнопку редагування
    const Edit = await $('button.styles_edit__ftuHl');

    await Edit.waitForDisplayed({ timeout: 5000 });
    await Edit.click();

// змінити прізвище і номер телефону
    const surnameField = await $('input[name="surname"]');  
    const phoneField = await $('input[name="phone"]');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Ivanov');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue(`38${rundomNumber()}000`);

// натиснути кнопку Edit
      const ddls = await $$('button.styles_primary-dark__1WnyR');

      const Buttons = await $$('button.styles_primary-dark__1WnyR');
      const EditButton = Buttons[2];

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

