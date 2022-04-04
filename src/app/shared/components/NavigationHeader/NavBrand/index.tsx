import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BrandDiv, BrandLink, LogoImg, LogoSpan } from './styles';

interface NavBrandProps {
  imgSrc?: string;
  text: string;
}

export const NavBrand: React.FC<NavBrandProps> = ({ imgSrc, text }) => (
  <BrandDiv>
    <BrandLink to="/" replace={true}>
      {imgSrc ? (
        <LogoImg src={imgSrc} alt={text}></LogoImg>
      ) : (
        <LogoSpan>{text}</LogoSpan>
      )}
    </BrandLink>
  </BrandDiv>
);

NavBrand.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
};
