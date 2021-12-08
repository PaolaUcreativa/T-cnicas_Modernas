import InputsPage from '../pageobjects/inputs.page';

describe('My Inputs App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.');
    });
    beforeEach(async function(){
        console.log('I get executed before every it');
        await InputsPage.open('inputs');
    });
    afterAll(async function(){
        console.log('I get executed after all its.');
    });
    afterEach(async function(){
        console.log('I get executed after every it');
        await InputsPage.open('inputs');
    });


    it('Should open the inputs app', async () => {
        console.log('first test');
        await expect(InputsPage.getTitle).toHaveTextContaining('Inputs');
    });
    it('Should have subtitle', async () => {
        console.log('second test');
        await expect(InputsPage.getSubtitle).toHaveTextContaining('Number');
    });
    it('Set number', async () => {
        console.log('third test');
        await InputsPage.setValueInput();
         expect(InputsPage.currentInput()).toHaveTextContaining(70);
    });
}); 