import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionCertificaciones } from '../hoc/ProveedorGestionCertificaciones';
import { RouteComponentProps } from 'react-router-dom';

const CertificacionPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Certificaciones" description="Gestión de certificaciones">
      <ProveedorGestionCertificaciones />
    </Layout>
  );
};

CertificacionPage.displayName = 'CertificacionPage';

export default CertificacionPage;
