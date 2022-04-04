import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ContainerTitle,
  SectionContainer,
} from 'app/shared/components/Layout/styles';

interface InicioProps {
  msg: string;
}

export const Inicio: React.FC<InicioProps> = ({ msg }) => {
  return (
    <SectionContainer>
      <ContainerTitle>{msg}</ContainerTitle>
      <img src="https://picsum.photos/id/8/400/200" alt="" />
    </SectionContainer>
  );
};

Inicio.propTypes = {
  msg: PropTypes.string.isRequired,
};
