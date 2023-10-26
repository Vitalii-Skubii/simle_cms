import React, { useState, useEffect } from 'react';

const DummyList = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const randomData = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setData(randomData);
  }, []);

  return (
    <div className="list">
      <h2 className="tabHeader">{title}</h2>
      <ul>
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyList;
