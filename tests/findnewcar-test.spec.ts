import {test, expect} from '../utils/test-base';


test.describe('Find New Car', ()=>{

    test.beforeEach(async ({pages}) => {
      
        await pages.homePage.navigateToHomePage();
    });

    test('Find New Car', async ({pages}) => {
        await pages.homePage.findNewCar();
        await expect(pages.page).toHaveURL(/.*new-cars/);
        await console.log(await pages.newCarsPage.getHeaderText());
        expect(await pages.newCarsPage.getHeaderText()).toContain('New Cars');
        await pages.newCarsPage.gotoBMWCar();
        await expect(pages.page).toHaveURL(/.*bmw-cars/);
    })

});