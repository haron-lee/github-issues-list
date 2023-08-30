import React from 'react';
import { styled } from 'styled-components';
import { OWNER, REPO } from 'utils/constants';

const header = () => {
  return (
    <Title>
      <h1>{`${OWNER}/${REPO}`}</h1>
    </Title>
  );
};

const Title = styled.header`
  font-size: 28px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 30px;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

export default header;
