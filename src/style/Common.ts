import styled, { css } from 'styled-components';

export const CommonIssueItem = css`
  border-bottom: 1px solid var(--gray-800);
  padding: 40px 0;
  padding-right: 20px;
`;

export const CommonTitleLayout = css`
  h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;

    strong {
      color: var(--primary);
      margin-right: 10px;
    }
  }

  p {
    color: var(--gray-500);
  }
`;
