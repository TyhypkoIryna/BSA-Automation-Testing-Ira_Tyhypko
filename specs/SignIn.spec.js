const assert = require('assert');
const {expect} = require('chai')
//  Тест на логін
// [x] перехід по урлу
// [x] заповнити форму
// [x] натиснути кнопку рег.
// [x] перевірка результату

// перехід по урлу
describe('SignIn:', function () {
  xit('should be able to SignIn', async function (){
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

// натиснути кнопку рег.
    await signUpButton.waitForDisplayed({ timeout: 5000 });
        await signUpButton.click();

// перевірка результату
        await browser.waitUntil( 
          async function () {
            const url = await browser.getUrl();
            return url === 'http://46.101.234.121/doctors';
          },
          { timeout: 5000 },
        );
        
        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/doctors');

        await browser.reloadSession();
});

});

