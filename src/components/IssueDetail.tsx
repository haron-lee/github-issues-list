import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { CommonIssueItem, CommonTitleLayout } from 'style/Common';

const IssueDetail: React.FC = () => {
  const { state } = useLocation();
  console.log('🚀state', state);

  return (
    <MainLayout>
      <IssueTitle>
        <IssueTitleWrapper>
          <img src={state.user.avatar_url} alt='' />
          <IssueTitleLayout>
            <h2 title={state.title}>
              <strong>{state.number}</strong>
              {state.title}
            </h2>
            <p>
              작성자:{state.user.login}, 작성일: {state.created_at}
            </p>
          </IssueTitleLayout>
        </IssueTitleWrapper>
        <p>{state.comments}</p>
      </IssueTitle>
      <ContentLayout>
        <ReactMarkdown>{state.body}</ReactMarkdown>
      </ContentLayout>
    </MainLayout>
  );
};

const MainLayout = styled.main`
  height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: var(--primary);
    border-radius: 10px;
  }
`;

const IssueTitle = styled.li`
  ${CommonIssueItem}
  padding: 0px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  color: var(--white);
  list-style: none;

  img {
    width: 140px;
    height: 140px;
  }
`;

const IssueTitleLayout = styled.div`
  ${CommonTitleLayout}

  h2 {
    -webkit-line-clamp: 2;
    line-height: 1.7;
  }
`;

const IssueTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContentLayout = styled.div`
  padding: 30px 20px 10px;
  color: var(--white);
  line-height: 1.7;
  font-size: 18px;
`;

export default IssueDetail;
