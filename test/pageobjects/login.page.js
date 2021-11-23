

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */

 class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getTitle() {
        return $('h3');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async login (username, password) {
        browser.url(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();