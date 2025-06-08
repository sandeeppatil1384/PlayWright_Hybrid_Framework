import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from '../locators/locators.json'

export class HondaPage extends BasePage{

    constructor(page: Page){
        super(page);
    }
}