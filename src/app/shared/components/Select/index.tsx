import styled from 'styled-components';

export const Select = styled.select`
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;
