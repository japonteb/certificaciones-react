import {
  listarClientes,
  obtenerDetalleCliente,
} from '../../acciones/clientes/ClientesAcciones';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { EstadoCliente } from 'app/core/redux/modelo/EstadoCliente';

import reductorClientes from './clientesReductor';

describe('Reductor clientes', () => {
  it('debería listar clientes', () => {
    // Arrange
    const estadoInicial: EstadoCliente = {
      cantidadTotalCliente: 0,
      clientes: [],
      cliente: { id: 1, nombre: 'Javier', tipoCliente: 4 },
    };
    const clientes: Cliente[] = [
      {
        id: 1,
        nombre: 'Javier',
        tipoCliente: 4,
      },
      {
        id: 2,
        nombre: 'Juan',
        tipoCliente: 3,
      },
    ];
    const estadoEsperado: EstadoCliente = {
      ...estadoInicial,
      clientes: clientes,
      cantidadTotalCliente: 2,
    };

    // Act
    const nuevoEstado = reductorClientes(
      estadoInicial,
      listarClientes(clientes, 2)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería obtener el detalle del cliente', () => {
    // Arrange
    const estadoInicial: EstadoCliente = {
      cantidadTotalCliente: 0,
      clientes: [],
      cliente: { id: 1, nombre: 'Javier', tipoCliente: 4 },
    };
    const clienteDetalle: Cliente = {
      id: 2,
      nombre: 'Juan',
      tipoCliente: 3,
    };

    const estadoEsperado: EstadoCliente = {
      ...estadoInicial,
      cliente: clienteDetalle,
    };

    // Act
    const nuevoEstado = reductorClientes(
      estadoInicial,
      obtenerDetalleCliente(clienteDetalle)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
