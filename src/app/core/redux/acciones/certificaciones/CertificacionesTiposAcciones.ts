import { Certificacion } from 'app/feature/Producto/models/Certificacion';

export const AGREGAR_CERTIFICACION = 'AGREGAR_CERTIFICACION';
export const ELIMINAR_CERTIFICACION = 'ELIMINAR_CERTIFICACION';
export const LISTAR_CERTIFICACIONES = 'LISTAR_CERTIFICACIONES';

interface AccionListarCertificaciones {
  type: typeof LISTAR_CERTIFICACIONES;
  payload: Certificacion[];
  cantidadTotalCertificacion: number;
}

interface AccionAgregarCertificacion {
  type: typeof AGREGAR_CERTIFICACION;
  payload: Certificacion;
}

interface AccionEliminarCertificacion {
  type: typeof ELIMINAR_CERTIFICACION;
  payload: Certificacion;
}

export type TiposAccionesCertificacion =
  | AccionAgregarCertificacion
  | AccionListarCertificaciones
  | AccionEliminarCertificacion;
