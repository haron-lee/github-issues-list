import { useState } from 'react';
import { Octokit } from 'octokit';
import { issueProps } from 'type';

const useOctokit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getOctokit = async (pageNum: number) => {
    setIsLoading(true);

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN,
    });

    try {
      const { data: issueData } = await octokit.request(
        `Get /repos/facebook/react/issues?page=${pageNum}&sort=comments`,
        {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      if (issueData) {
        const newIssueData: issueProps[] = issueData.map(
          (issue: issueProps) => ({
            id: issue.id,
            number: issue.number,
            title: issue.title,
            created_at: issue.created_at,
            user: issue.user,
            comments: issue.comments,
            body: issue.body,
            image: issue.user.avatar_url,
          })
        );

        setIsLoading(false);
        return newIssueData;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return { getOctokit, isLoading };
};

export default useOctokit;
