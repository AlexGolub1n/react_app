import React, { useState } from 'react';

const Announcement = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Квартира в екб',
      decription: 'возможное описание',
      adress: 'тут будет адрес',
    },
  ]);
  return (
    <div>
      <h2>Объявления</h2>
      {<li>{data.name}</li>}
    </div>
  );
};

export default Announcement;
