import { styled } from 'styled-components';
import IssueSkeletonUnit from './issueSkeletonUnit';

const IssueSkeleton = () => {
  return (
    <Layout>
      <IssueSkeletonUnit />
      <IssueSkeletonUnit />
    </Layout>
  );
};

export default IssueSkeleton;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;
