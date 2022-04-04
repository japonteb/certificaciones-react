import styled from 'styled-components';

export const FooterSpace = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 3em;
  text-align: center;
`;

export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const FooterSocialListLi = styled.li`
  margin: 0 1em;
  &:hover {
    color: #ffbb33;
  }
`;

export const FooterSocialListMessage = styled.p`
  font-weight: bold;
  color: #ffbb33;
`;

export const FooterSocialListSpan = styled.span`
  margin-top: 2em;
`;

export default {};
