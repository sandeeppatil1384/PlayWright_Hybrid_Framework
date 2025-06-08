import {test, expect, Page} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';
import {BMWPage} from '../pages/BMWPage';
import {HondaPage} from '../pages/HondaPage';
import {HyundaiPage} from '../pages/HyundaiPage';
import {ToyotaCarsPage} from '../pages/ToyotaCarsPage'


export class PageFixtures{

    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwPage: BMWPage;
    readonly toyotaPage: ToyotaCarsPage;
    readonly hondaPage: HondaPage;
    readonly hyundaiPage: HyundaiPage;
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.bmwPage = new BMWPage(page);
        this.toyotaPage = new ToyotaCarsPage(page);
        this.hondaPage = new HondaPage(page);
        this.hyundaiPage = new HyundaiPage(page);

    }

    get basePage(): Page{
        return this.page;
    }
}


