import { Certificacion } from 'app/feature/Producto/models/Certificacion';

export const AGREGAR_CERTIFICACION = 'AGREGAR_CERTIFICACION';
export const AGREGAR_MENSAJE_ERROR_CERTIFICACION =
  'AGREGAR_MENSAJE_ERROR_CERTIFICACION';
export const ELIMINAR_CERTIFICACION = 'ELIMINAR_CERTIFICACION';
export const LIMPIAR_MENSAJES_CERTIFICACION = 'LIMPIAR_MENSAJES_CERTIFICACION';
export const LISTAR_CERTIFICACIONES = 'LISTAR_CERTIFICACIONES';

interface AccionListarCertificaciones {
  type: typeof LISTAR_CERTIFICACIONES;
  payload: Certificacion[];
  cantidadTotalCertificacion: number;
}

interface AccionAgregarCertificacion {
  type: typeof AGREGAR_CERTIFICACION;
  payload: Certificacion;
  mensajesCertificaciones: string;
}

interface AccionEliminarCertificacion {
  type: typeof ELIMINAR_CERTIFICACION;
  payload: Certificacion;
  mensajesCertificaciones: string;
}

interface AccionAgregarMensajeErrorCertificacion {
  type: typeof AGREGAR_MENSAJE_ERROR_CERTIFICACION;
  mensajesCertificaciones: string;
  hayError: boolean;
}

interface AccionLimpiarMensajeCertificacion {
  type: typeof LIMPIAR_MENSAJES_CERTIFICACION;
  mensajesCertificaciones: string;
  hayError: boolean;
}

export type TiposAccionesCertificacion =
  | AccionAgregarCertificacion
  | AccionAgregarMensajeErrorCertificacion
  | AccionListarCertificaciones
  | AccionLimpiarMensajeCertificacion
  | AccionEliminarCertificacion;
