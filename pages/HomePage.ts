import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from '../locators/locators.json'

export class HomePage extends BasePage{

    private locators = allLocators.HomePage;

    constructor(page: Page){
        super(page);
    }

     async navigateToHomePage(){
        await this.navigateTo('/');
    }

    async findNewCar(){

        await this.hover(this.locators.newCars);
        await this.click(this.locators.findNewCars);
        await this.waitForTimeout(2000);


    }

    async searchCar(){

    }

    async upcomingCars(){
        
    }
}