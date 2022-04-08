import {
  agregarMensajeErrorExamen,
  agregarNuevoExamen,
  limpiarMensajeExamen,
  listarExamenesPorCliente,
} from '../../acciones/examenes/ExamenesAcciones';
import { EstadoExamen } from 'app/core/redux/modelo/EstadoExamen';
import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';

import reductorExamenes from './examenesReductor';

describe('Reductor examenes', () => {
  it('debería agregar examenes', () => {
    // Arrange
    const estadoInicial: EstadoExamen = {
      cantidadTotalExamenPorCliente: 0,
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

    const mensajeCrearExamen = 'Examen agregado en pruebas';

    const estadoEsperado: EstadoExamen = {
      ...estadoInicial,
      examenes: [],
      mensajesExamenes: mensajeCrearExamen,
    };
    // Act
    const nuevoEstado = reductorExamenes(
      estadoInicial,
      agregarNuevoExamen(nuevoExamen, mensajeCrearExamen)
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería agregar mensaje de error exámenes', () => {
    // Arrange
    const estadoInicial: EstadoExamen = {
      cantidadTotalExamenPorCliente: 0,
      examenes: [],
      mensajesExamenes: '',
      hayError: false,
    };

    const mensajeErrorCertificaciones =
      'Mensaje de error en exámenes desde pruebas';

    const estadoEsperado: EstadoExamen = {
      ...estadoInicial,
      mensajesExamenes: mensajeErrorCertificaciones,
      hayError: true,
    };

    // Act
    const nuevoEstado = reductorExamenes(
      estadoInicial,
      agregarMensajeErrorExamen(mensajeErrorCertificaciones)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería limpiar los mensaje de error de exámenes', () => {
    // Arrange
    const estadoInicial: EstadoExamen = {
      cantidadTotalExamenPorCliente: 0,
      examenes: [],
      mensajesExamenes: '',
      hayError: false,
    };

    const estadoEsperado: EstadoExamen = {
      ...estadoInicial,
      mensajesExamenes: '',
      hayError: false,
    };

    // Act
    const nuevoEstado = reductorExamenes(estadoInicial, limpiarMensajeExamen());

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería listar exámenes por cliente', () => {
    // Arrange
    const estadoInicial: EstadoExamen = {
      cantidadTotalExamenPorCliente: 0,
      examenes: [],
      mensajesExamenes: '',
      hayError: false,
    };
    const examenes: ExamenPorCliente[] = [
      {
        id: 10,
        nombre: 'PHP',
        detalle: 'CodeIgniter',
        fechaPresentacion: '2022-04-08T13:30:00.000Z',
        precioTotal: 900000,
      },
      {
        id: 11,
        nombre: 'Scrum',
        detalle: 'Scrum Master',
        fechaPresentacion: '2022-04-07T14:30:01.000Z',
        precioTotal: 21,
      },
    ];
    const estadoEsperado: EstadoExamen = {
      ...estadoInicial,
      examenes: examenes,
      cantidadTotalExamenPorCliente: 2,
    };

    // Act
    const nuevoEstado = reductorExamenes(
      estadoInicial,
      listarExamenesPorCliente(examenes, 2)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
