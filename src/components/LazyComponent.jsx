import { lazy, Suspense } from 'react';

export const LazyComponent = ({tab}) => {

  const MarkupComponent = lazy(() => import(`./${tab.path}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
     
      <MarkupComponent title={tab.title}/>
    </Suspense>
  );
};
