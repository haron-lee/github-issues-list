import React from 'react';
import { styled } from 'styled-components';

const header = () => {
  return (
    <Title>
      <h1>facebook/react</h1>
    </Title>
  );
};

const Title = styled.header`
  font-size: 32px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 50px;
`;

export default header;
