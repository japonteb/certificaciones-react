import * as React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  FooterSocialList,
  FooterSocialListLi,
  FooterSocialListMessage,
  FooterSocialListSpan,
  FooterSpace,
} from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterSpace>
      <FooterSocialList>
        <FooterSocialListLi>
          <FaFacebook />
        </FooterSocialListLi>
        <FooterSocialListLi>
          <FaInstagram />
        </FooterSocialListLi>
        <FooterSocialListLi>
          <FaLinkedin />
        </FooterSocialListLi>
      </FooterSocialList>
      <FooterSocialListMessage>
        <FooterSocialListSpan>Certificaciones</FooterSocialListSpan> &copy; 2022
      </FooterSocialListMessage>
    </FooterSpace>
  );
};
