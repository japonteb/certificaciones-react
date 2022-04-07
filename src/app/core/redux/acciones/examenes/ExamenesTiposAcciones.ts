import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';

export const AGREGAR_EXAMEN = 'AGREGAR_EXAMEN';
export const AGREGAR_MENSAJE_ERROR_EXAMEN = 'AGREGAR_MENSAJE_ERROR_EXAMEN';
export const LISTAR_EXAMENES_POR_CLIENTE = 'LISTAR_EXAMENES_POR_CLIENTE';

interface AccionListarExamenesPorExamen {
  type: typeof LISTAR_EXAMENES_POR_CLIENTE;
  payload: ExamenPorCliente[];
  cantidadTotalExamenPorCliente: number;
}

interface AccionAgregarExamen {
  type: typeof AGREGAR_EXAMEN;
  payload: RegistrarExamen;
  mensajesExamenes: string;
}

interface AccionAgregarMensajeErrorExamen {
  type: typeof AGREGAR_MENSAJE_ERROR_EXAMEN;
  mensajesExamenes: string;
  hayError: boolean;
}

export type TiposAccionesExamen =
  | AccionAgregarExamen
  | AccionAgregarMensajeErrorExamen
  | AccionListarExamenesPorExamen;
