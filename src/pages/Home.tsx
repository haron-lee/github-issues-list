import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import getOctokit from 'api/octokit';
import IssueItem from 'components/IssueItem';
import { issueProps } from 'type';

const Home: FC = () => {
  const [issues, setIssues] = useState<issueProps[]>([]);

  const getIssue = async () => {
    const issues = await getOctokit(1);
    const newIssues: issueProps[] = issues?.map((issue: issueProps) => ({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      created_at: issue.created_at,
      user: issue.user,
      comments: issue.comments,
      body: issue.body,
    }));
    setIssues(newIssues);
  };

  useEffect(() => {
    getIssue();
  }, []);

  return (
    <MainLayout>
      <ul>
        {issues.map((issue: issueProps, index: number) => (
          <IssueItem
            key={index}
            issue={issue}
            Ad={index >= 3 && (index - 3) % 4 === 0}
          />
        ))}
      </ul>
    </MainLayout>
  );
};

const MainLayout = styled.main`
  height: 700px;
  overflow: auto;
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

export default Home;
