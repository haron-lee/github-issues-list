// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from 'octokit';

const getOctokit = async (pageNum: number) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });
  const { data: issueData } = await octokit.request(
    `Get /repos/facebook/react/issues?page=${pageNum}&sort=comments`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  return issueData;
};

export default getOctokit;
