import { EstadoExamen } from 'app/core/redux/modelo/EstadoExamen';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';

import { agregarNuevoExamen } from '../../acciones/examenes/ExamenesAcciones';
import reductorExamenes from './examenesReductor';

describe('Reductor examenes', () => {
  it('debería agregar examenes', () => {
    // Arrange
    const estadoInicial: EstadoExamen = {
      cantidadTotalExamenPorCliente: 2,
      examenes: [],
    };
    const nuevoExamen: RegistrarExamen = {
      cliente: { id: 1, nombre: 'William', tipoCliente: 4 },
      certificacion: {
        id: 1,
        nombre: 'Java',
        detalle: 'Java EE y Servicios Web',
        duracion: 120,
        precio: 1000,
      },
      fechaPresentacion: new Date(Date.now() + 3600 * 1000 * 24).toISOString(),
    };
    const estadoEsperado: EstadoExamen = {
      ...estadoInicial,
      examenes: [],
    };
    // Act
    const nuevoEstado = reductorExamenes(
      estadoInicial,
      agregarNuevoExamen(nuevoExamen)
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
