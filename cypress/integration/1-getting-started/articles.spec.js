/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('articles', () => {
    // helpers
    const GoTo = {
        home: () => {
            cy.get('.svg-inline--fa').click();
            cy.get('a').contains('Home').click();
        },
        dashboard: () => {
            cy.get('.svg-inline--fa').click();
            cy.get('a').contains('Dashboard').click();
        },
        editArticle: () => {
            cy.get('.svg-inline--fa').click();
            cy.get('a').contains('Articles').click();
            cy.get(':nth-child(1) > .ant-card-actions > :nth-child(2) > :nth-child(1) > a').click();
        },
        readArticles: () => {
            cy.get('.svg-inline--fa').click();
            cy.get('a').contains('Articles').click();
        },
        createArticle: () => {
            GoTo.dashboard();
            cy.get('[href="/articles/create"]').click();
        }
    }
    const Do = {
        clearFormFields: () => {
            cy.get('#basic_title').clear();
            cy.get('#basic_description').clear()
            cy.get('.jodit-wysiwyg').clear();
        },
        submit: () => {
            cy.get('.ant-form-item-control-input-content > .ant-btn').click();
        },
        fillInputs: (title, image, desc, content) => {
            console.log(image);
            cy.get('#basic_title').type(title);
            cy.get('input[type="file"]').attachFile(image);
            cy.get('#basic_description').type(desc);
            cy.get('.jodit-wysiwyg').type(content);
        },
        login: () => {
            cy.get('.svg-inline--fa').click();
            cy.get('a').contains('Login').click();
            cy.get('#normal_login_email').clear();
            cy.get('#normal_login_email').type('maha@admin.com');
            cy.get('#normal_login_password').clear();
            cy.get('#normal_login_password').type('12345678');
            cy.get('.ant-btn > span').click();
            cy.get('.ant-form-item-explain-error').should('have.text', 'Wrong credentials , make sure that your email & password is correct');
            cy.get('#normal_login_password').clear();
            cy.get('#normal_login_password').type('12345');
            cy.get('button').contains('Login').click();
            cy.get('.svg-inline--fa').click();
        }
    }
    const Assert = {
        validationOnEdit: () => {
            cy.get(':nth-child(1) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The title field is required.');
            cy.get(':nth-child(3) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The description field is required.');
            cy.get(':nth-child(4) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The content field is required.');
        },
        validationOnCreate: () => {
            cy.get(':nth-child(1) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The title field is required.');
            cy.get(':nth-child(2) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The cover field is required.');
            cy.get(':nth-child(3) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The description field is required.');
            cy.get(':nth-child(4) > .ant-row > .ant-col-16 > [style="display: flex; flex-wrap: nowrap;"] > .ant-form-item-explain > .ant-form-item-explain-error').should('have.text', 'The content field is required.');
        },
        afterEdit: (title, desc, content) => {
            cy.get(':nth-child(1) > .ant-card-body > a > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-description').should('have.text', desc);
            cy.get(':nth-child(1) > .ant-card-body').click();
            cy.get('.text-3xl').should('have.text', title);
            cy.get('p').should('have.text', content);
        },
        afterCreate: (title, desc, content) => {
            cy.get(':last-child() > .ant-card-body > a > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-description').should('have.text', desc);
            cy.get(':last-child() > .ant-card-body').click();
            cy.get('.text-3xl').should('have.text', title);
            cy.get('p').should('have.text', content);
        }
    }
    const images = ['img1.jpg', 'img2.png', 'img3.jpg']

    before(() => {
        cy.visit('http://127.0.0.1:8000/')
    })
    const tests = {
        createArticle: () => {
            const title = faker.word.noun();
            const desc = faker.lorem.lines(1);
            const content = faker.lorem.paragraph();
            /* ==== Generated with Cypress Studio ==== */
            GoTo.createArticle();
            Do.fillInputs(title, images[faker.datatype.number({ min: 0, max: images.length - 1 })], desc, content);
            Do.submit();
            Assert.afterCreate(title, desc, content);
            GoTo.createArticle();
        },
        validateCreateArticle: () => {
            GoTo.createArticle();
            Do.submit();
            Assert.validationOnEdit()
        },
        validateEditArticle: () => {

            GoTo.editArticle();
            Do.clearFormFields();
            Do.submit();
            Assert.validationOnEdit()
        },
        editArticle: () => {
            const title = faker.word.noun();
            const desc = faker.lorem.lines(1);
            const content = faker.lorem.paragraph();
            GoTo.editArticle();
            Do.clearFormFields();
            Do.fillInputs(title, images[faker.datatype.number({ min: 0, max: images.length - 1 })], desc, content);
            Do.submit();
            Assert.afterEdit(title, desc, content);
        },
        deleteArticles: () => {
            cy.get(':nth-child(1) > .ant-card-actions > :nth-child(1) > :nth-child(1)').click();
        }
    }

    it('login', () => {
        Do.login();
    })

    it('test', () => {

        /* ==== Generated with Cypress Studio ==== */

        for (let i = 1; i <= 5; i++) {
            tests.createArticle();
        }
        tests.validateCreateArticle();
        tests.editArticle();
        tests.validateEditArticle();
        // for (let i = 1; i <= 5; i++) {
        //     GoTo.readArticles();
        //     cy.wait(1000)
        //     cy.get(`:nth-child(1) > .ant-card-actions > :nth-child(1) > :nth-child(1)`).click()
        // }
    })



})
