import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, FormInputDiv, SpanError } from './styles';
import { Button } from 'app/shared/components/Button';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Label } from 'app/shared/components/Label';
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
    .positive('La duración debe ser un número positivo'),
  precio: Yup.number()
    .required('El campo precio es requerido.')
    .typeError('El precio debe ser un número')
    .positive('El precio debe ser un número positivo'),
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
      duracion: Number(values.duracion),
      precio: Number(values.precio),
    });
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>{formTitle}</h2>
      <FormInputDiv>
        <Label htmlFor="nombre">Nombre de la certificación:</Label>
        <Input
          disabled={disabled}
          id="nombre"
          placeholder="Ingresa el nombre"
          {...formik.getFieldProps('nombre')}
        />
        {formik.touched.nombre && formik.errors.nombre && (
          <SpanError>{formik.errors.nombre}</SpanError>
        )}
      </FormInputDiv>

      <FormInputDiv>
        <Label htmlFor="detalle">Detalle de la certificación:</Label>
        <Input
          disabled={disabled}
          id="detalle"
          placeholder="Ingresa el detalle"
          {...formik.getFieldProps('detalle')}
        />
        {formik.touched.detalle && formik.errors.detalle && (
          <SpanError>{formik.errors.detalle}</SpanError>
        )}
      </FormInputDiv>
      <FormInputDiv>
        <Label htmlFor="duracion">Duración de la certificación:</Label>
        <Input
          disabled={disabled}
          id="duracion"
          placeholder="Ingresa la duración en horas"
          {...formik.getFieldProps('duracion')}
        />
        {formik.touched.duracion && formik.errors.duracion && (
          <SpanError>{formik.errors.duracion}</SpanError>
        )}
      </FormInputDiv>
      <FormInputDiv>
        <Label htmlFor="precio">Precio de la certificación:</Label>
        <Input
          disabled={disabled}
          id="precio"
          placeholder="Ingresa el precio en COP"
          {...formik.getFieldProps('precio')}
        />
        {formik.touched.precio && formik.errors.precio && (
          <SpanError>{formik.errors.precio}</SpanError>
        )}
      </FormInputDiv>
      <Button type="submit">Registrar</Button>
    </Form>
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
