import { Page } from "@playwright/test";

export class HomePage{

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private newCarsMenu = () => this.page.locator('//div[normalize-space()="NEW CARS"]');
    private findNewCarsMenu = () => this.page.locator('text = Find New Cars');

    async navigateToHomePage(){
        await this.page.goto('/');
    }

    async findNewCar(){

        await this.newCarsMenu().hover();
        await this.findNewCarsMenu().click();
        await this.page.waitForTimeout(2000);


    }

    async searchCar(){

    }

    async upcomingCars(){
        
    }
}