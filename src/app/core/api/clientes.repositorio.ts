import { axiosIntance } from '../config/AxiosConfig';

export const ClienteRepositorio = {
  consultarPorPagina: () => axiosIntance.get('/clientes'),
  consultarClientePorId: (clienteId: number) =>
    axiosIntance.get(`/clientes/${clienteId}`),
};
