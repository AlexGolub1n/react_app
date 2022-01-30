import React, { useState } from 'react';

const Announcement = () => {
  const [data, setData] = useState({
    id: 1,
    name: 'Квартира в екб',
    decription: 'возможное описание',
    adress: 'тут будет адрес',
  });
  return (
    <div>
      <h2>Объявления</h2>
      <p>
        {data.id}. Название объявления: "{data.name}" Адрес: {data.adress}
      </p>
    </div>
  );
};

export default Announcement;
