import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from '../locators/locators.json'

export class NewCarsPage extends BasePage{
    private locators = allLocators.NewCarsPage;

    constructor(page: Page){
        super(page);
    }

    async getHeaderText(): Promise<string>{
        return await this.getText(this.locators.newCarsHeading);
    }

    async gotoBMWCar(){
        await this.click(this.locators.bmwCar);
    }

    async gotoHyundaiCar(){
        await this.click(this.locators.hyundaiCar);
    }
    
}