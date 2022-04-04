import * as React from 'react';
import {
  ContainerParagraph,
  SectionContainer,
} from './shared/components/Layout/styles';
import { Layout } from './shared/components/Layout';

const MainPage = () => (
  <Layout title="Inicio" description="Página inicial">
    <SectionContainer>
      <h1>¡Aprovecha y Certifícate ya!</h1>
      <ContainerParagraph>
        Puedes presentar el examen cualquier día del año.
      </ContainerParagraph>
      <ContainerParagraph>
        Aplican descuentos dependiendo del tipo de vinculo que tengas con la
        institución.
      </ContainerParagraph>
    </SectionContainer>
  </Layout>
);

export default MainPage;
