import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const ErrorFallback: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>응답에 문제가 있습니다.</h1>
      <Button onClick={() => navigate('/')}>홈으로 이동</Button>
    </>
  );
};

const Button = styled.button`
  padding: 20px 30px;
  color: var(--white);
  background: var(--primary);
`;

export default ErrorFallback;
