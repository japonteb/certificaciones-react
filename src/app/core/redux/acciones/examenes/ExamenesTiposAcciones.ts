import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';

export const AGREGAR_EXAMEN = 'AGREGAR_EXAMEN';
export const LISTAR_EXAMENES_POR_CLIENTE = 'LISTAR_EXAMENES_POR_CLIENTE';

interface AccionListarExamenesPorExamen {
  type: typeof LISTAR_EXAMENES_POR_CLIENTE;
  payload: ExamenPorCliente[];
  cantidadTotalExamenPorCliente: number;
}

interface AccionAgregarExamen {
  type: typeof AGREGAR_EXAMEN;
  payload: RegistrarExamen;
}

export type TiposAccionesExamen =
  | AccionAgregarExamen
  | AccionListarExamenesPorExamen;
