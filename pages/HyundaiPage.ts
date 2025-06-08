import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from '../locators/locators.json'

export class HyundaiPage extends BasePage{

    private locators = allLocators.HomePage;

    constructor(page: Page){
        super(page);
    }
}