import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItemDiv = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #ffbb33;
  }
`;

export {};
