export interface issueProps {
  id: number;
  number: number;
  title: string;
  created_at: string;
  user: {
    login: string;
  };
  comments: number;
  body: string;
}
