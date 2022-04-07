describe('Pruebas de certificaciones', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/examenes');
    cy.fixture('examen.json').as('DatosExamen');
  });

  it('Programar examen', () => {
    cy.get('@DatosExamen').then((DatosExamen) => {
      cy.CrearExamen(DatosExamen);
    });
  });
});
