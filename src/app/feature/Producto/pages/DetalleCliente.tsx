import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionDetalleCliente } from '../hoc/ProveedorGestionDetalleCliente';
import { RouteComponentProps } from 'react-router-dom';

const DetalleClientePage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Detalle cliente" description="Gestión detalle cliente">
      <ProveedorGestionDetalleCliente />
    </Layout>
  );
};

DetalleClientePage.displayName = 'DetalleClientePage';

export default DetalleClientePage;
