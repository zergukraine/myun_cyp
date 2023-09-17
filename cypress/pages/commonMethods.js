export class CommonMethods {

    TOKEN_FILE = 'token.txt';

    writeTokenToFile(token) {
        cy.writeFile(this.TOKEN_FILE, token);
    }

    readTokenFromFile() {
        return cy.readFile(this.TOKEN_FILE);
    }

    getAccessToken() {
        return cy.getCookie('myu-access-token').its('value').then(token => {
            this.writeTokenToFile(token);
        });
    }

    updatePassword(oldPassword, newPassword, baseURL) {
        return this.readTokenFromFile().then(token => {
            return cy.request({
                method: 'PUT',
                url: `${baseURL}/api/user/password`,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    old_password: oldPassword,
                    new_password: newPassword
                }
            }).then((response) => {
                expect(response.status).to.eq(204);
            });
        });
    }

}

export default new CommonMethods();
