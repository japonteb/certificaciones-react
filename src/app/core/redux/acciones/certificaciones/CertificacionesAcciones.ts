import {
  AGREGAR_CERTIFICACION,
  ELIMINAR_CERTIFICACION,
  LISTAR_CERTIFICACIONES,
  TiposAccionesCertificacion,
} from './CertificacionesTiposAcciones';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { CertificacionRepositorio } from 'app/core/api/certificaciones.repositorio';

export function agregarNuevaCertificacion(
  certificacion: Certificacion,
  mensajesCertificaciones: string
): TiposAccionesCertificacion {
  return {
    type: AGREGAR_CERTIFICACION,
    payload: certificacion,
    mensajesCertificaciones,
  };
}

export function listarCertificaciones(
  certificaciones: Array<Certificacion>,
  cantidadTotalCertificacion: number
): TiposAccionesCertificacion {
  return {
    type: LISTAR_CERTIFICACIONES,
    payload: certificaciones,
    cantidadTotalCertificacion,
  };
}

export function eliminarCertificacion(
  certificacion: Certificacion,
  mensajesCertificaciones: string
): TiposAccionesCertificacion {
  return {
    type: ELIMINAR_CERTIFICACION,
    payload: certificacion,
    mensajesCertificaciones,
  };
}

export function agregarNuevaCertificacionAsync(certificacion: Certificacion) {
  return function (dispacth: any) {
    CertificacionRepositorio.agregarCertificacion(certificacion)
      .then((respuesta: any) => {
        dispacth(
          agregarNuevaCertificacion(
            certificacion,
            'La certificación fue almacenada con éxito'
          )
        );
      })
      .catch((error: any) => {
        console.log(error.response.data.message);
      });
  };
}

export function eliminarCertificacionAsync(certificacion: Certificacion) {
  return function (dispacth: any) {
    CertificacionRepositorio.eliminarCertificacion(certificacion.id)
      .then((respuesta: any) =>
        dispacth(
          eliminarCertificacion(
            certificacion,
            'La certificación fue eliminada con éxito'
          )
        )
      )
      .catch((error: any) => {
        console.log(error.response.data.message);
      });
  };
}

export function listarCertificacionesAsync() {
  return function (dispacth: any) {
    CertificacionRepositorio.consultarPorPagina().then((respuesta: any) =>
      dispacth(listarCertificaciones(respuesta.data, 6))
    );
  };
}
