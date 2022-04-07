import { Certificacion } from 'app/feature/Producto/models/Certificacion';

export interface EstadoCertificacion {
  certificaciones: Certificacion[];
  cantidadTotalCertificacion: number;
  mensajesCertificaciones: string;
}
