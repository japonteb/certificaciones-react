import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, FormInputDiv, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { ContainerParagraph } from 'app/shared/components/Layout/styles';
import { FormikHelpers } from 'formik/dist/types';
import { Label } from 'app/shared/components/Label';
import { RegistrarExamen } from 'app/feature/Producto/models/RegistrarExamen';
import { Select } from 'app/shared/components/Select';
import { useFormik } from 'formik';

interface FormValues {
  cliente: Cliente;
  certificacion: Certificacion;
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
  cliente: Yup.object()
    .shape({
      id: Yup.number().required(),
      nombre: Yup.string().required(),
      tipoCliente: Yup.number().required(),
    })
    .required('El campo cliente es requerido.'),
  certificacion: Yup.object()
    .shape({
      id: Yup.number().required(),
      nombre: Yup.string().required(),
      detalle: Yup.string().required(),
      duracion: Yup.number().required(),
      precio: Yup.number().required(),
    })
    .required('El campo certificación es requerido.'),
  fechaPresentacion: Yup.date()
    .default(() => new Date())
    .required('El campo fecha de presentación del examen es requerido.'),
});

export const FormCrearExamen: React.FC<FormCrearExamenProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    cliente: { id: 0, nombre: '', tipoCliente: 0 },
    certificacion: { id: 0, nombre: '', detalle: '', duracion: 0, precio: 0 },
    fechaPresentacion: new Date(),
  },
  clientes,
  certificaciones,
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit({
      cliente: values.cliente,
      certificacion: values.certificacion,
      fechaPresentacion: values.fechaPresentacion.toISOString(),
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  console.log(formik.values);

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
          name="cliente"
          value={formik.values.cliente.id}
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
        {formik.touched.cliente && formik.errors.cliente && (
          <SpanError>{formik.errors.cliente}</SpanError>
        )}
      </FormInputDiv>

      <FormInputDiv>
        <Label htmlFor="certificación">Certificación:</Label>
        <Select
          id="certificacion"
          disabled={disabled}
          name="certificacion"
          value={formik.values.certificacion.id}
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
        {formik.touched.certificacion && formik.errors.certificacion && (
          <SpanError>{formik.errors.certificacion}</SpanError>
        )}
      </FormInputDiv>

      <FormInputDiv>
        <Label htmlFor="fechaPresentacion">
          Fecha de presentación del examen:
        </Label>

        <input
          disabled={disabled}
          name="fechaPresentacion"
          type="datetime-local"
          placeholder="Fecha de presentación del examen"
          onChange={formik.handleChange}
        />

        {formik.touched.fechaPresentacion &&
          formik.errors.fechaPresentacion && (
            <SpanError>{formik.errors.fechaPresentacion}</SpanError>
          )}
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
    cliente: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      tipoCliente: PropTypes.number.isRequired,
    }).isRequired,
    certificacion: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      detalle: PropTypes.string.isRequired,
      duracion: PropTypes.number.isRequired,
      precio: PropTypes.number.isRequired,
    }).isRequired,
    fechaPresentacion: PropTypes.instanceOf(Date).isRequired,
  }),
};
