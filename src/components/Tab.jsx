import React from 'react';
import { useParams } from 'react-router-dom';
import { LazyComponent } from './LazyComponent';

const Tab = ({ tabs }) => {
  const params = useParams();
  const routeId = Object.values(params)[0];

  const tab = tabs.find((t) => t.id === routeId);

  if (!tab) {
    return <div>Tab not found.</div>;
  }

  return (
    <div className="container">
      <LazyComponent tab={tab} />
    </div>
  );
};

export default Tab;
