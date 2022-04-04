import { Certificacion } from './Certificacion';
import { Cliente } from './Cliente';

export interface RegistrarExamen {
  cliente: Cliente;
  certificacion: Certificacion;
  fechaPresentacion: string;
}
