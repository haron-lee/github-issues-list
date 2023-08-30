import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useOctokit from 'api/useOctokit';
import IssueItem from 'components/IssueItem';
import { issueProps } from 'type';
import IssueSkeleton from 'components/skeleton/issueSkeleton';

const Home: FC = () => {
  const { getOctokit, isLoading } = useOctokit();
  const [issues, setIssues] = useState<issueProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  let debounceTimeout: NodeJS.Timeout;

  const handleScroll = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, 300);
  };

  useEffect(() => {
    const getIssuesData = async () => {
      const issuesData = await getOctokit(currentPage);
      console.log('몇번실행?');
      if (issuesData) {
        setIssues((prevIssues) => [...prevIssues, ...issuesData]);
      }
    };
    getIssuesData();
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
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
        {isLoading && <IssueSkeleton />}
      </ul>
    </MainLayout>
  );
};

const MainLayout = styled.main`
  overflow: auto;
  padding: 10px 0;

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
`;

export default Home;
