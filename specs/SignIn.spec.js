
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();
//  Тест на логін
// [x] перехід по урлу
// [x] заповнити форму
// [x] натиснути кнопку рег.
// [x] перевірка результату

const app = new App();

describe('SignIn:', function () {
  beforeEach(async function(){
    await browser.setWindowSize(1440, 960);
    await browser.url('http://46.101.234.121/sign-in');
  });
  this.afterEach(async function(){
    await browser.reloadSession();
  });

  it('should be able to SignIn', async function (){

await app.authPage.logIn({ 
  email: `marcus${rundomNumber()}@gmail.com`,
  password: 'Pa55word',})
});

});

