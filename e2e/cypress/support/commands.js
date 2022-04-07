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

Cypress.Commands.add('CrearCertificacion', (DatosCertificacion) => {
  cy.get('#nombre').type(DatosCertificacion.nombre);
  cy.get('#detalle').type(DatosCertificacion.detalle);
  cy.get('#duracion').clear().type(DatosCertificacion.duracion);
  cy.get('#precio').clear().type(DatosCertificacion.precio);
});

Cypress.Commands.add('CrearExamen', (DatosExamen) => {
  cy.get('#cliente').select(DatosExamen.cliente);
  cy.get('#certificacion').select(DatosExamen.certificacion);
});
