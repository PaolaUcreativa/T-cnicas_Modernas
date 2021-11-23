import LoginPage from  '../pageobjects/login.page';
import AuthPage from '../pageobjects/auth.page';



describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.login('admin', 'admin');
        await expect(LoginPage.getTitle).toBeExisting();
        await expect(LoginPage.getTitle).toHaveTextContaining('Basic Auth');
    });
});



