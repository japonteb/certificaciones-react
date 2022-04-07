describe('Pruebas de certificaciones', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });
  it('Entrar a la página principal', () => {
    cy.get('.sc-AxgMl').contains(
      'Aplicación para gestionar exámenes de certificaciones'
    );
  });
});
