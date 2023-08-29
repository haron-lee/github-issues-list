import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { issueProps } from 'type';
import star1 from 'assets/star1.jpeg';
import star2 from 'assets/star2.jpeg';
import star3 from 'assets/star3.jpeg';
import star4 from 'assets/star4.jpeg';

interface IssueItemProps {
  issue: issueProps;
  Ad?: boolean;
}

const IssueItem: FC<IssueItemProps> = ({ issue, Ad }) => {
  const imageUrls = [star1, star2, star3, star4];

  const currentIndex = Math.floor(issue.id % imageUrls.length);
  const imageUrl = imageUrls[currentIndex];

  return (
    <>
      <IssueItemLayout>
        <IssueItemLink to={'/' + issue.id}>
          <IssueTitleLayout>
            <h2>
              <strong>{issue.number}</strong> {issue.title}
            </h2>
            <p>
              작성자:{issue.user.login}, 작성일: {issue.created_at}
            </p>
          </IssueTitleLayout>
          <p>{issue.comments}</p>
        </IssueItemLink>
      </IssueItemLayout>
      {Ad && (
        <AdImage>
          <img src={imageUrl} alt='광고 이미지' />
        </AdImage>
      )}
    </>
  );
};

const IssueItemLayout = styled.li`
  border-bottom: 1px solid var(--gray-800);
  padding: 40px 0;
  padding-right: 20px;

  &:hover {
    background-color: var(--secondary);
  }
`;

const IssueItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  color: var(--white);
`;

const IssueTitleLayout = styled.div`
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
    }
  }

  p {
    color: var(--gray-500);
  }
`;

const AdImage = styled.li`
  width: 100%;
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center -25px;
  }
`;

export default IssueItem;
