import { useState } from 'react';
import { Octokit } from 'octokit';
import { OWNER, REPO } from 'utils/constants';

const useOctokit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getIssueData = async (pageNum: number) => {
    setIsLoading(true);

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN,
    });

    try {
      const { data: issueData } = await octokit.rest.issues.listForRepo({
        owner: OWNER,
        repo: REPO,
        page: pageNum,
        sort: 'comments',
      });

      setIsLoading(false);
      return issueData;
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return { getIssueData, isLoading };
};

export default useOctokit;
