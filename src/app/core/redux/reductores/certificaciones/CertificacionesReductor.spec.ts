import {
  agregarMensajeErrorCertificacion,
  agregarNuevaCertificacion,
  eliminarCertificacion,
  limpiarMensajeCertificacion,
  listarCertificaciones,
} from '../../acciones/certificaciones/CertificacionesAcciones';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { EstadoCertificacion } from 'app/core/redux/modelo/EstadoCertificacion';

import reductorCertificaciones from './certificacionesReductor';

describe('Reductor certificaciones', () => {
  it('debería agregar certificaciones', () => {
    // Arrange
    const estadoInicial: EstadoCertificacion = {
      cantidadTotalCertificacion: 0,
      certificaciones: [],
      mensajesCertificaciones: '',
      hayError: false,
    };
    const nuevaCertificacion: Certificacion = {
      id: 1,
      nombre: 'Java',
      detalle: 'Java EE y Web Services',
      duracion: 120,
      precio: 1000,
    };
    const estadoEsperado: EstadoCertificacion = {
      ...estadoInicial,
      certificaciones: [nuevaCertificacion],
      mensajesCertificaciones: 'Certificación agregada en pruebas',
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

  it('debería listar certificaciones', () => {
    // Arrange
    const estadoInicial: EstadoCertificacion = {
      cantidadTotalCertificacion: 0,
      certificaciones: [],
      mensajesCertificaciones: '',
      hayError: false,
    };
    const certificaciones: Certificacion[] = [
      {
        id: 1,
        nombre: 'Java',
        detalle: 'Java EE y Web Services',
        duracion: 120,
        precio: 1000,
      },
      {
        id: 2,
        nombre: 'PHP',
        detalle: 'CodeIgniter',
        duracion: 300,
        precio: 2000,
      },
    ];
    const estadoEsperado: EstadoCertificacion = {
      ...estadoInicial,
      certificaciones: certificaciones,
      cantidadTotalCertificacion: 2,
    };

    // Act
    const nuevoEstado = reductorCertificaciones(
      estadoInicial,
      listarCertificaciones(certificaciones, 2)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería agregar mensaje de error certificaciones', () => {
    // Arrange
    const estadoInicial: EstadoCertificacion = {
      cantidadTotalCertificacion: 0,
      certificaciones: [],
      mensajesCertificaciones: '',
      hayError: false,
    };

    const mensajeErrorCertificaciones =
      'Mensaje de error en certificaciones desde pruebas';

    const estadoEsperado: EstadoCertificacion = {
      ...estadoInicial,
      mensajesCertificaciones: mensajeErrorCertificaciones,
      hayError: true,
    };

    // Act
    const nuevoEstado = reductorCertificaciones(
      estadoInicial,
      agregarMensajeErrorCertificacion(mensajeErrorCertificaciones)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería limpiar los mensaje de error de certificaciones', () => {
    // Arrange
    const estadoInicial: EstadoCertificacion = {
      cantidadTotalCertificacion: 0,
      certificaciones: [],
      mensajesCertificaciones: 'Mensaje de error desde pruebas',
      hayError: true,
    };

    const estadoEsperado: EstadoCertificacion = {
      ...estadoInicial,
      mensajesCertificaciones: '',
      hayError: false,
    };

    // Act
    const nuevoEstado = reductorCertificaciones(
      estadoInicial,
      limpiarMensajeCertificacion()
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería eliminar una certificación', () => {
    // Arrange
    const estadoInicial: EstadoCertificacion = {
      cantidadTotalCertificacion: 2,
      certificaciones: [
        {
          id: 1,
          nombre: 'Java',
          detalle: 'Java EE y Web Services',
          duracion: 120,
          precio: 1000,
        },
        {
          id: 2,
          nombre: 'PHP',
          detalle: 'CodeIgniter',
          duracion: 300,
          precio: 2000,
        },
      ],
      mensajesCertificaciones: '',
      hayError: false,
    };

    const certificacionAEliminar: Certificacion = {
      id: 2,
      nombre: 'PHP',
      detalle: 'CodeIgniter',
      duracion: 300,
      precio: 2000,
    };

    const mensajeEliminarCertificacion =
      'Certificación eliminada desde pruebas';

    const estadoEsperado: EstadoCertificacion = {
      ...estadoInicial,
      certificaciones: [
        {
          id: 1,
          nombre: 'Java',
          detalle: 'Java EE y Web Services',
          duracion: 120,
          precio: 1000,
        },
      ],
      mensajesCertificaciones: mensajeEliminarCertificacion,
      hayError: false,
    };

    // Act
    const nuevoEstado = reductorCertificaciones(
      estadoInicial,
      eliminarCertificacion(
        certificacionAEliminar,
        mensajeEliminarCertificacion
      )
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
