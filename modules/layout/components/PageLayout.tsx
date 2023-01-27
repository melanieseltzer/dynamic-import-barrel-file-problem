import dynamic from 'next/dynamic';

// load layouts only when they are used, to optimize first load of the app
const Layout1 = dynamic(() => import('../layouts/Layout1'));
const Layout2 = dynamic(() => import('../layouts/Layout2'));

type Props = {
  layout?: string;
  children: React.ReactNode;
};

export function PageLayout({ layout, children }: Props) {
  switch (layout) {
    case 'layout1':
      return <Layout1>{children}</Layout1>;
    case 'layout2':
      return <Layout2>{children}</Layout2>;
    default:
      return <>{children}</>;
  }
}
