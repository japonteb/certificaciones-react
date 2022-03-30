import * as PropTypes from 'prop-types';
import * as React from 'react';

interface InicioProps {
  msg: string;
}

export const Inicio: React.FC<InicioProps> = ({ msg }) => {
  return (
    <div>
      <h1>{msg}</h1>
      <img src="https://picsum.photos/id/8/400/200" alt="" />
    </div>
  );
};

Inicio.propTypes = {
  msg: PropTypes.string.isRequired,
};
