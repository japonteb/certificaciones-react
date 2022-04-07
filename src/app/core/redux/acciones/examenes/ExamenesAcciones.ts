import {
  AGREGAR_EXAMEN,
  AGREGAR_MENSAJE_ERROR_EXAMEN,
  LISTAR_EXAMENES_POR_CLIENTE,
  TiposAccionesExamen,
} from './ExamenesTiposAcciones';
import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';
import { ExamenRepositorio } from 'app/core/api/examenes.repositorio';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';

export function agregarNuevoExamen(
  examen: RegistrarExamen,
  mensajesExamenes: string
): TiposAccionesExamen {
  console.log(mensajesExamenes);
  return {
    type: AGREGAR_EXAMEN,
    payload: examen,
    mensajesExamenes,
  };
}

export function agregarMensajeErrorExamen(
  mensajesExamenes: string
): TiposAccionesExamen {
  return {
    type: AGREGAR_MENSAJE_ERROR_EXAMEN,
    mensajesExamenes,
    hayError: true,
  };
}

export function agregarNuevoExamenAsync(examen: RegistrarExamen) {
  return function (dispacth: any) {
    ExamenRepositorio.agregarExamen(examen)
      .then((respuesta: any) =>
        dispacth(
          agregarNuevoExamen(examen, 'El examen fue programado con éxito')
        )
      )
      .catch((error: any) => {
        agregarMensajeErrorExamen(error.response.data.message);
      });
  };
}

export function listarExamenesPorCliente(
  examenes: Array<ExamenPorCliente>,
  cantidadTotalExamenPorCliente: number
): TiposAccionesExamen {
  return {
    type: LISTAR_EXAMENES_POR_CLIENTE,
    payload: examenes,
    cantidadTotalExamenPorCliente,
  };
}

export function listarExamenesPorClienteAsync(clienteId: number) {
  return function (dispacth: any) {
    ExamenRepositorio.consultarExamenesPorClientePorId(clienteId).then(
      (respuesta: any) => dispacth(listarExamenesPorCliente(respuesta.data, 6))
    );
  };
}
