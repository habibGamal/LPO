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

describe('meetings', () => {
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
        meetingsEditor: () => {
            GoTo.dashboard();
            cy.get('[href="/meetings/create"]').click();
        },
        meetings: () => {
            cy.get('#navbars').click();
            cy.get('a').contains('Zoom Meetings').click();
        }
    }
    const Do = {
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
        },
        fillInputs: (name, link, state) => {
            cy.get('#new_name').type(name);
            cy.get('#new_meeting_link').type(link);
            cy.get('#new_date').click()
            cy.get('a').contains('Today').click();
            cy.get('#new_state').click();
            cy.get('.ant-select-item-option-content').contains(state).click();
            cy.get('#new input[type="file"]').attachFile('img1.jpg')
            cy.get('#new input[type="file"]').attachFile('img2.png')
            cy.get('#new input[type="file"]').attachFile('img3.jpg')
        },
        submit: () => {
            cy.get('#new button').contains('Save').click();
        }
    }
    const Assert = {
        createMeeting:(name,stateShouldBe)=>{
            cy.get(':last-child() > .flex > .rounded').should('have.text', stateShouldBe);
            cy.get(':last-child() > .flex > .text-xl').should('have.text', name);
        }
    }
    const images = ['img1.jpg', 'img2.png', 'img3.jpg']
    const states = ['Not Started', 'In Meeting', 'ended']

    before(() => {
        cy.visit('http://127.0.0.1:8000/')
    })


    it('test', () => {
        Do.login();
        const name = faker.word.noun();
        const link = faker.lorem.lines(1);
        const state = states[faker.datatype.number({ min: 0, max: states.length - 1 })]
        GoTo.meetingsEditor();
        Do.fillInputs(name, link, state);
        Do.submit();
        /* ==== Generated with Cypress Studio ==== */
        cy.wait(2000);
        /* ==== Generated with Cypress Studio ==== */
        GoTo.meetings()
        const stateShouldBe = state == 'Not Started'|| state == 'In Meeting' ? 'Join Meeting' : 'Show Meeting'
        Assert.createMeeting(name,stateShouldBe);
        /* ==== End Cypress Studio ==== */
    })



})
