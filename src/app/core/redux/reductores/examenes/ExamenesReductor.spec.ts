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
      mensajesExamenes: '',
      hayError: false,
    };
    const nuevoExamen: RegistrarExamen = {
      comandoCliente: { id: 1, nombre: 'William', tipoCliente: 4 },
      comandoCertificacion: {
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
      mensajesExamenes: 'Examen agregado en pruebas',
    };
    // Act
    const nuevoEstado = reductorExamenes(
      estadoInicial,
      agregarNuevoExamen(nuevoExamen, 'Examen agregado en pruebas')
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
