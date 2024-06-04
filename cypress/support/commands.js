// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


  //Commande personnalisée
  Cypress.Commands.add('getid', (id) => {
    cy.request({
        mothod: "GET", 
        url: `https://practice.expandtesting.com/notes/api/notes/${id}`,
        headers : { 
        "x-auth-token":"c886d28dbc07429997655f0b1012f96b3215c722083a4f80b823c504bc5cf94d"
      }
    })
    })