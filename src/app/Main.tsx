import * as React from 'react';
import { Layout } from './shared/components/Layout';

const MainPage = () => (
  <Layout title="Inicio" description="Página inicial">
    <h1>¡Aprovecha y Certifícate ya!</h1>
    <br />
    <h3>Puedes presentar el examen cualquier día del año.</h3>
    <br />
    <h3>
      Aplican descuentos dependiendo del tipo de vinculo que tengas con la
      institución.
    </h3>
  </Layout>
);

export default MainPage;
