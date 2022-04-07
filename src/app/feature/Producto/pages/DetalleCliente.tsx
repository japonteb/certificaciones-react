import * as React from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionDetalleCliente } from '../hoc/ProveedorGestionDetalleCliente';

const DetalleClientePage: React.FC<RouteComponentProps> = () => {
  const { id } = useParams();

  return (
    <Layout title="Detalle cliente" description="Gestión detalle cliente">
      <ProveedorGestionDetalleCliente clienteId={id} />
    </Layout>
  );
};

DetalleClientePage.displayName = 'DetalleClientePage';

export default DetalleClientePage;
