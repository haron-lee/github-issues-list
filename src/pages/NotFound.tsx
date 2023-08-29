import React from 'react';
import { styled } from 'styled-components';

const NotFound: React.FC = () => {
  return <NotFoundTitle>페이지를 찾을 수 없습니다 🫠</NotFoundTitle>;
};

const NotFoundTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export default NotFound;
