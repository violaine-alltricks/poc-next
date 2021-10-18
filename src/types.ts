import { NextPage } from 'next';

export type Page = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
