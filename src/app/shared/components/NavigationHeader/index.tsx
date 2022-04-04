import * as React from 'react';
import { HeaderNav } from './styles';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Inicio', url: '/home' },
    { label: 'Certificaciones', url: '/certificaciones' },
    { label: 'Clientes', url: '/clientes' },
    { label: 'Detalle cliente', url: '/clientes-por-id' },
    { label: 'Exámenes', url: '/examenes' },
  ];
  return (
    <HeaderNav>
      <NavBrand text="Certificaciones Ltda."></NavBrand>
      <NavList items={routes} />
    </HeaderNav>
  );
};
