import Page from "./page";

class InputsPage extends Page{
    /**
     * define selectors using getter methods
     */
     get getTitle(){
        return $('h3');
     } 

     get getSubtitle(){
        return $('p');
     } 

    get getInput(){
        return $('input[type=number]');
    }

    setValueInput(){
        return this.getInput.setValue(11);
    }

    currentInput(){
        return $('#content > div > div > div > input[type=number]');
    }
}

export default new InputsPage();