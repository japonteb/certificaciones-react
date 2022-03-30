import { Certificacion } from './Certificacion';
import { Cliente } from './Cliente';

export interface Examen {
  id: number;
  comandoCliente: Cliente;
  comandoCertificacion: Certificacion;
  fechaPresentacion: string;
  precio: number;
}
