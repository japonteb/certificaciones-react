import * as React from 'react';
import { HeaderNav } from './styles';
import LogoCeiba from 'assets/img/logo-ceiba.png';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Inicio', url: '/home' },
    { label: 'Productos', url: '/productos' },
    { label: 'Certificaciones', url: '/certificaciones' },
    { label: 'Clientes', url: '/clientes' },
    { label: 'Exámenes', url: '/examenes' },
  ];
  return (
    <HeaderNav>
      <NavBrand imgSrc={LogoCeiba} text="Ceiba Software"></NavBrand>
      <NavList items={routes} />
    </HeaderNav>
  );
};
