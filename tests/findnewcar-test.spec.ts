import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';


test.describe('Find New Car', ()=>{

    let homePage: HomePage;
    let newCarsPage: NewCarsPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        newCarsPage = new NewCarsPage(page);
        await homePage.navigateToHomePage();
    });

    test('Find New Car', async ({page}) => {
        await homePage.findNewCar();
        await expect(page).toHaveURL(/.*new-cars/);
        await console.log(await newCarsPage.getHeaderText());
        expect(await newCarsPage.getHeaderText()).toContain('New Cars');
        await newCarsPage.gotoBMWCar();
        await expect(page).toHaveURL(/.*bmw-cars/);
    })

});