describe('Pruebas de certificaciones', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Entrar a la página principal', () => {
    cy.get('h1').contains('¡Aprovecha y Certifícate ya!');
    cy.get('.sc-AxhUy > :nth-child(2)').contains(
      'Puedes presentar el examen cualquier día del año.'
    );
    cy.get('.sc-AxhUy > :nth-child(3)').contains(
      'Aplican descuentos dependiendo del tipo de vinculo que tengas con la institución.'
    );
    cy.get('.sc-fzqNJr').contains('Certificaciones');
  });
});
