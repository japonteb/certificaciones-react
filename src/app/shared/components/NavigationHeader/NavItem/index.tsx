import * as PropTypes from 'prop-types';
import * as React from 'react';
import { NavItemDiv, NavItemLink } from './styles';

interface NavItemProps {
  label: string;
  to: string;
}

export const NavItem: React.FC<NavItemProps> = ({ label, to }) => (
  <NavItemDiv>
    <NavItemLink to={to} replace={true}>
      {label}
    </NavItemLink>
  </NavItemDiv>
);

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
