import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionExamenes } from '../hoc/ProveedorGestionExamenes';
import { RouteComponentProps } from 'react-router-dom';

const ExamenPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Exámenes" description="Gestión de exámenes">
      <ProveedorGestionExamenes />
    </Layout>
  );
};

ExamenPage.displayName = 'ExamenPage';

export default ExamenPage;
