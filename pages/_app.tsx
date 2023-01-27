import { NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';

// This barrel import causes the dynamic imports inside `PageLayout` to stop working 😱
// Both layout files will not be separately chunked 🤦‍♀️
import { PageLayout } from '../modules/layout';

// Import `PageLayout` like this instead
// import { PageLayout } from '../modules/layout/components/PageLayout';

export interface AppProps extends NextAppProps {
  Component: NextPage & {
    layout?: string;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout layout={Component.layout}>
      <Component {...pageProps} />
    </PageLayout>
  );
}
