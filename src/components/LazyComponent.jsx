import { lazy, Suspense } from 'react';
import { Spinner } from './Spinner';

export const LazyComponent = ({ tab }) => {
  const MarkupComponent = lazy(() => import(`./${tab.path}`));

  return (
    <Suspense fallback={<Spinner />}>
      <MarkupComponent title={tab.title} />
    </Suspense>
  );
};
