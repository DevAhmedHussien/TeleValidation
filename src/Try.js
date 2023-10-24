import React, { useState } from 'react';

function ButtonPanel() {

      //try -> navigation betwwen button by 
//   const closeButtonRef = useRef(null);
//   const confirmButtonRef = useRef(null);
//   const inputRef = useRef(null);
//   const [inputValue, setInputValue] = useState('');

// useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowRight') {
//         confirmButtonRef.current.focus();
//       } else if (event.key === 'ArrowLeft') {
//         closeButtonRef.current.focus();
//       } else if (/^\d$/.test(event.key)) {
//         // Поддержка ввода цифр
//         setInputValue(inputValue + event.key);
//       } else if (event.key === 'Backspace') {
//         // Поддержка клавиши BACKSPACE для удаления цифр
//         setInputValue(inputValue.slice(0, -1));
//       } else if (event.key === 'Enter') {
//         // Поддержка клавиши ENTER для выбора кнопки
//         if (inputValue === '1') {
//           closeButtonRef.current.click();
//         } else if (inputValue === '2') {
//           confirmButtonRef.current.click();
//         }
//       }
//     };
//     document.addEventListener('keydown', handleKeyPress);
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   } 
//   , [inputValue]);

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



