import React, { useState } from 'react';

function AdviceGenerator() {
  const adviceArray = [
    'Не бійся спробувати нове.',
    'Кожен день — це новий шанс.',
    'Ніколи не здавайся.',
    'Розвивай свої сильні сторони.',
    'Ти здатний на більше, ніж думаєш.'
  ];

  const [advice, setAdvice] = useState('Натисни кнопку для отримання поради!');

  const fetchAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceArray.length);
    setAdvice(adviceArray[randomIndex]);
  };

  return (
    <div>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Отримати нову пораду</button>
    </div>
  );
}

export default AdviceGenerator;
