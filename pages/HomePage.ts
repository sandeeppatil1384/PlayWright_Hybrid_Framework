import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    //private newCarsMenu = () => this.page.locator('//div[normalize-space()="NEW CARS"]');
    //private findNewCarsMenu = () => this.page.locator('text = Find New Cars');

    async navigateToHomePage(){
        await this.navigateTo('/');
    }

    async findNewCar(){

        await this.hover('//div[normalize-space()="NEW CARS"]');
        await this.click('text = Find New Cars');
        await this.waitForTimeout(2000);


    }

    async searchCar(){

    }

    async upcomingCars(){
        
    }
}