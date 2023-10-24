import React, { useState } from 'react';

function ButtonPanel() {
  const [selectedButton, setSelectedButton] = useState(0);
  const totalButtons = 10;

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleNextButton = () => {
    setSelectedButton((prevSelected) => (prevSelected + 1) % totalButtons);
  };

  const handlePreviousButton = () => {
    setSelectedButton((prevSelected) =>
      prevSelected === 0 ? totalButtons - 1 : prevSelected - 1
    );
  };

  const handleCloseButton = () => {
    // Реализуйте логику закрытия UI
    alert('UI закрыто');
  };

  const handleConfirmButton = () => {
    // Реализуйте логику подтверждения
    alert('Действие подтверждено');
  };

  const buttons = Array.from({ length: totalButtons }, (_, index) => (
    <button
      key={index}
      onClick={() => handleButtonClick(index)}
      className={selectedButton === index ? 'selected' : ''}
    >
      Кнопка {index + 1}
    </button>
  ));

  return (
    <div>
      <div>
        <button onClick={handlePreviousButton}>Предыдущая</button>
        <button onClick={handleNextButton}>Следующая</button>
      </div>
      <div>{buttons}</div>
      <div>
        <button onClick={handleCloseButton}>Закрыть</button>
        <button onClick={handleConfirmButton}>Подтвердить</button>
      </div>
    </div>
  );
}

export default ButtonPanel;



