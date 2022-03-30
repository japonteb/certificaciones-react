import * as React from 'react';
import { Inicio } from '../components/Inicio';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <Inicio msg="Aplicación para gestionar exámenes de certificaciones" />
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
