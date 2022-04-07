import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { EstadoCertificacion } from 'app/core/redux/modelo/EstadoCertificacion';

import { agregarNuevaCertificacion } from '../../acciones/certificaciones/CertificacionesAcciones';
import reductorCertificaciones from './certificacionesReductor';

describe('Reductor certificaciones', () => {
  it('debería agregar certificaciones', () => {
    // Arrange
    const estadoInicial: EstadoCertificacion = {
      cantidadTotalCertificacion: 2,
      certificaciones: [],
      mensajesCertificaciones: '',
      hayError: false,
    };
    const nuevaCertificacion: Certificacion = {
      id: -1,
      nombre: 'Java',
      detalle: 'Java EE y Web Services',
      duracion: 120,
      precio: 1000,
    };
    const estadoEsperado: EstadoCertificacion = {
      ...estadoInicial,
      certificaciones: [nuevaCertificacion],
    };

    // Act
    const nuevoEstado = reductorCertificaciones(
      estadoInicial,
      agregarNuevaCertificacion(
        nuevaCertificacion,
        'Certificación agregada en pruebas'
      )
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
