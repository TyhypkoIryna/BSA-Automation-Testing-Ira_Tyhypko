const assert = require('assert');
const {expect} = require('chai')
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();
//  Тест на логін з не валідними данними

const app = new App();
describe('SignIn with Invalid Data:', function () {
  beforeEach(async function(){
    await browser.setWindowSize(1440, 960);
    await browser.url('http://46.101.234.121/sign-in');
  });
  this.afterEach(async function(){
    await browser.reloadSession();
  });


  it('should not be able to SignIn with Invalid Data', async function (){

    await app.authPage.InvalidDatalogIn({ 
      email: `marcus${rundomNumber()}@gmail.com`,
      password: 'Pa5 5wo&r*d',})
    });

});

