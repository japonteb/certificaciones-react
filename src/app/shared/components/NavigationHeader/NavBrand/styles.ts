import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BrandDiv = styled.div`
  margin: 5px;
`;

export const LogoImg = styled.img`
  max-height: 50px;
  max-width: 150px;
`;

export const LogoSpan = styled.span`
  color: #ffbb33;
  font-size: calc(18px + 2vmin);
`;

export const BrandLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default {};
