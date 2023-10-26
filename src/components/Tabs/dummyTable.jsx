import React, { useState, useEffect } from 'react';

const DummyTable = ({title}) => {
if(!title){title='Dummy Table'}

  const [data, setData] = useState([]);

  useEffect(() => {
    const randomData = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setData(randomData);
  }, []);

  return (
    <div className="table">
       <h2 className='tabHeader'>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;
