export class HomePage {

    avatarIsDisplayedOnHomePage() {
        return cy.get('.MuiAvatar-root').should('be.visible');
    }

    weekDashboardIsDisplayedOnHomePage() {
        return cy.get('#WeekDashboard').should('be.visible');
    }

    leftMenuItemsAreDisplayedOnHomePage() {
        cy.get(`div[class*='MuiButtonBase-root MuiListItem-root']`).each((element) => {
            cy.wrap(element).should('be.visible');
        });
    }
}

export default new HomePage();
