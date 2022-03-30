import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { axiosIntance } from '../config/AxiosConfig';

export const CertificacionRepositorio = {
  agregarCertificacion: (certificacion: Certificacion) =>
    axiosIntance.post('/certificaciones', certificacion),
  consultarPorPagina: () => axiosIntance.get('/certificaciones'),
  eliminarCertificacion: (id: number) =>
    axiosIntance.delete(`/certificaciones/${id}`),
};
