import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Find New Car', ()=>{

    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    });

    test('Find New Car', async ({page}) => {
        await homePage.findNewCar();
        await expect(page).toHaveURL(/.*new-cars/);
    })

});