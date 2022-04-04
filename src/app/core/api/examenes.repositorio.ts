import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';
import { axiosIntance } from '../config/AxiosConfig';

export const ExamenRepositorio = {
  agregarExamen: (examen: RegistrarExamen) =>
    axiosIntance.post('/examenes', examen),
  consultarExamenesPorClientePorId: (clienteId: number) =>
    axiosIntance.get(`examenes/clientes/${clienteId}`),
};
