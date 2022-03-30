import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionClientes } from '../hoc/ProveedorGestionClientes';
import { RouteComponentProps } from 'react-router-dom';

const ClientePage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Clientes" description="Gestión de clientes">
      <ProveedorGestionClientes />
    </Layout>
  );
};

ClientePage.displayName = 'ClientePage';

export default ClientePage;
