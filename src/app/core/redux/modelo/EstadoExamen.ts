import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';

export interface EstadoExamen {
  examenes: ExamenPorCliente[];
  cantidadTotalExamenPorCliente: number;
}
