import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, FormInputDiv, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { ContainerParagraph } from 'app/shared/components/Layout/styles';
import DatePicker from 'react-datepicker';
import { FormikHelpers } from 'formik/dist/types';
import { Label } from 'app/shared/components/Label';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';
import { Select } from 'app/shared/components/Select';
import { useFormik } from 'formik';
import { useState } from 'react';

interface FormValues {
  clienteId: number;
  certificacionId: number;
  fechaPresentacion: Date;
}

interface FormCrearExamenProp {
  onSubmit: (payload: RegistrarExamen) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
  clientes: Cliente[];
  certificaciones: Certificacion[];
}

const validationSchema = Yup.object().shape<FormValues>({
  clienteId: Yup.number().required(),
  certificacionId: Yup.number().required(),
  fechaPresentacion: Yup.date()
    .default(() => new Date())
    .required('El campo fecha de presentación del examen es requerido.'),
});

export const FormCrearExamen: React.FC<FormCrearExamenProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    clienteId: 0,
    certificacionId: 0,
    fechaPresentacion: new Date(),
  },
  clientes,
  certificaciones,
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const cliente = clientes.find(
      (cli) => cli.id === Number(values.clienteId)
    ) || {
      id: -1,
      nombre: '',
      tipoCliente: -1,
    };
    const certificacion = certificaciones.find(
      (cli) => cli.id === Number(values.certificacionId)
    ) || {
      id: -1,
      nombre: '',
      detalle: '',
      duracion: -1,
      precio: -1,
    };
    onSubmit({
      comandoCliente: cliente,
      comandoCertificacion: certificacion,
      fechaPresentacion: fechaPresentacion.toISOString(),
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [fechaPresentacion, setFechaPresentacion] = useState(new Date());

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>{formTitle}</h2>
      <ContainerParagraph>
        Ingrese los datos correspondientes para programar el examen
      </ContainerParagraph>

      <FormInputDiv>
        <Label htmlFor="cliente">Cliente:</Label>
        <Select
          id="cliente"
          disabled={disabled}
          name="clienteId"
          value={formik.values.clienteId}
          onChange={formik.handleChange}
        >
          <option>Seleccione un cliente</option>
          {clientes.map((cliente: Cliente) => {
            return (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nombre}
              </option>
            );
          })}
        </Select>
        {formik.touched.clienteId && formik.errors.clienteId && (
          <SpanError>{formik.errors.clienteId}</SpanError>
        )}
      </FormInputDiv>

      <FormInputDiv>
        <Label htmlFor="certificación">Certificación:</Label>
        <Select
          id="certificacion"
          disabled={disabled}
          name="certificacionId"
          value={formik.values.certificacionId}
          onChange={formik.handleChange}
        >
          <option>Seleccione una certificación</option>
          {certificaciones.map((certificacion: Certificacion) => {
            return (
              <option key={certificacion.id} value={certificacion.id}>
                {certificacion.nombre} - {certificacion.detalle}
              </option>
            );
          })}
        </Select>
        {formik.touched.certificacionId && formik.errors.certificacionId && (
          <SpanError>{formik.errors.certificacionId}</SpanError>
        )}
      </FormInputDiv>

      <FormInputDiv>
        <Label htmlFor="fechaPresentacion">
          Fecha de presentación del examen:
        </Label>

        <DatePicker
          dateFormat="yyyy/MM/dd h:mm aa"
          id="fechaPresentacion"
          name="fechaPresentacion"
          selected={fechaPresentacion}
          showTimeSelect
          onChange={(date: Date) => setFechaPresentacion(date)}
        />
      </FormInputDiv>
      <Button type="submit">Registrar</Button>
    </Form>
  );
};

FormCrearExamen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  clientes: PropTypes.array.isRequired,
  certificaciones: PropTypes.array.isRequired,
  initialValues: PropTypes.shape({
    clienteId: PropTypes.number.isRequired,
    certificacionId: PropTypes.number.isRequired,
    fechaPresentacion: PropTypes.instanceOf(Date).isRequired,
  }),
};
