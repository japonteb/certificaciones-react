describe('Pruebas de certificaciones', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/certificaciones');
    cy.scrollTo(0, 0);
    cy.fixture('certificacion.json').as('DatosCertificacion');
  });

  it('Verificar información de la página', () => {
    cy.get('.sc-fznxsB > h2').contains('Crear certificación');
    cy.get(':nth-child(2) > .sc-fzqARJ').contains(
      'Nombre de la certificación:'
    );
    cy.get('.sc-AxheI').contains('Certificaciones disponibles.');
    cy.get(':nth-child(2) > h2').contains('Certificaciones');
  });

  it('Crear certificación', () => {
    cy.get('@DatosCertificacion').then((DatosCertificacion) => {
      cy.CrearCertificacion(DatosCertificacion);
    });
  });
});
