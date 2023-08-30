import styled from 'styled-components';

const IssueSkeletonUnit = () => {
  return <UnitLayout />;
};

const UnitLayout = styled.div`
  position: relative;
  width: 100%;
  height: 137px;
  background-color: var(--bg);
  border-radius: 10px;
  overflow: hidden;

  @keyframes light {
    0% {
      background-color: rgba(98, 98, 98, 0.1);
    }
    50% {
      background-color: rgba(136, 136, 136, 0.1);
    }
    100% {
      background-color: rgba(98, 98, 98, 0.1);
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: light 1.5s infinite ease-in-out;
  }
`;

export default IssueSkeletonUnit;
