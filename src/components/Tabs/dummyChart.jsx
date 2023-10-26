import React, { useState, useEffect } from 'react';

const DummyChart = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const randomData = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setData(randomData);
  }, []);

  return (
    <div className="wrapper">
      <h2 className="tabHeader">{title}</h2>
      <div className="chart">
        {data.map((value, index) => (
          <div key={index} className="bar" style={{ height: `${3 * value}px` }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyChart;
