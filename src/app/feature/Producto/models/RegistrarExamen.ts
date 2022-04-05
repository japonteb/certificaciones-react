import { Certificacion } from './Certificacion';
import { Cliente } from './Cliente';

export interface RegistrarExamen {
  comandoCliente: Cliente;
  comandoCertificacion: Certificacion;
  fechaPresentacion: string;
}
