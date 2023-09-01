import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { issueProps } from 'type';
import { CommonIssueItem, CommonTitleLayout } from 'style/Common';
import star1 from 'assets/star1.jpeg';
import star2 from 'assets/star2.jpeg';
import star3 from 'assets/star3.jpeg';
import star4 from 'assets/star4.jpeg';

interface IssueItemProps {
  issue: issueProps;
  Ad?: boolean;
}

const IssueItem: FC<IssueItemProps> = ({ issue, Ad }) => {
  const imageUrls = [star3, star1, star2, star4];

  const currentIndex = Math.floor(issue.id % imageUrls.length);
  const imageUrl = imageUrls[currentIndex];

  return (
    <>
      <IssueItemLayout>
        <IssueItemLink to={'/detail/' + issue.number} state={issue}>
          <IssueTitleLayout>
            <h2>
              <strong>{issue.number}</strong> {issue.title}
            </h2>
            <p>
              작성자: {issue.user.login}, 작성일: {issue.created_at}
            </p>
          </IssueTitleLayout>
          <p>{issue.comments}</p>
        </IssueItemLink>
      </IssueItemLayout>
      {Ad && (
        <AdImage>
          <Link to='https://www.wanted.co.kr/'>
            <img src={imageUrl} alt='광고 이미지' />
          </Link>
        </AdImage>
      )}
    </>
  );
};

const IssueItemLayout = styled.li`
  ${CommonIssueItem}
  list-style: none;

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
  ${CommonTitleLayout}
`;

const AdImage = styled.li`
  width: 100%;
  height: 160px;
  list-style: none;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center -25px;
  }
`;

export default IssueItem;
