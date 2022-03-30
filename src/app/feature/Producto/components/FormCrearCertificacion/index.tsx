import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Button } from 'app/shared/components/Button';
import { Certificacion } from '../../models/Certificacion';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { SpanError } from './styles';
import { useFormik } from 'formik';

interface FormValues {
  nombre: string;
  detalle: string;
  duracion: number;
  precio: number;
}

interface FormCrearCertificacionProp {
  onSubmit: (payload: Certificacion) => any;
  disabled?: boolean;
  formTitle: string;
  initialValues?: FormValues;
}

const validationSchema = Yup.object().shape<FormValues>({
  nombre: Yup.string().required('El campo nombre es requerido.'),
  detalle: Yup.string().required('El campo detalle es requerido.'),
  duracion: Yup.number()
    .required('El campo duración es requerido.')
    .typeError('La duración debe ser un número')
    .positive('El número debe ser positivo'),
  precio: Yup.number().required('El campo precio es requerido.'),
});

export const FormCrearCertificacion: React.FC<FormCrearCertificacionProp> = ({
  onSubmit,
  disabled,
  formTitle,
  initialValues = {
    nombre: '',
    detalle: '',
    duracion: 0,
    precio: 0,
  },
}) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    onSubmit({
      id: -1,
      nombre: values.nombre,
      detalle: values.detalle,
      duracion: values.duracion,
      precio: values.precio,
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{formTitle}</h2>
      <Input
        disabled={disabled}
        name="nombre"
        placeholder="Nombre de la certificación"
        value={formik.values.nombre}
        onChange={formik.handleChange}
      />
      {formik.touched.nombre && formik.errors.nombre && (
        <SpanError>{formik.errors.nombre}</SpanError>
      )}
      <Input
        disabled={disabled}
        name="detalle"
        placeholder="Detalle de la certificación"
        value={formik.values.detalle}
        onChange={formik.handleChange}
      />
      {formik.touched.detalle && formik.errors.detalle && (
        <SpanError>{formik.errors.detalle}</SpanError>
      )}
      <Input
        disabled={disabled}
        name="duracion"
        placeholder="Duración en horas"
        value={formik.values.duracion}
        onChange={formik.handleChange}
      />
      {formik.touched.duracion && formik.errors.duracion && (
        <SpanError>{formik.errors.duracion}</SpanError>
      )}

      <Input
        disabled={disabled}
        name="precio"
        placeholder="Precio en COP"
        value={formik.values.precio}
        onChange={formik.handleChange}
      />
      {formik.touched.precio && formik.errors.precio && (
        <SpanError>{formik.errors.precio}</SpanError>
      )}

      <Button type="submit">Registrar</Button>
    </form>
  );
};

FormCrearCertificacion.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  initialValues: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    detalle: PropTypes.string.isRequired,
    duracion: PropTypes.number.isRequired,
    precio: PropTypes.number.isRequired,
  }),
};
