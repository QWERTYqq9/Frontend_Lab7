import React, { useState } from "react";

function Image() {
  const [isHidden, setIsHidden] = useState(false);
  const [width, setWidth] = useState(300);

  const handleAdd = () => {
    setIsHidden(false);
  };

  const handleIncrease = () => {
    setWidth((prevWidth) => prevWidth + 20);
  };

  const handleDecrease = () => {
    setWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 20 : prevWidth));
  };

  const handleRemove = () => {
    setIsHidden(true);
  };

  return (
    <div>
      {!isHidden && (
        <a href="https://visitcopenhagen.com/" target="_blank" rel="noreferrer">
          <img
            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTW-m7S5nf5StZPQfkb6jUSz9pkPBKtkt5FAGOJuq1wzJiMajOnlPqP4x7dTzpl8pH5tlmkib23B88Be30KOzH0kVelqMU5T0-Qa0tzEg"
            alt="Копенгаген"
            style={{ width: `${width}px`, height: "auto" }}
          />
        </a>
      )}
      <div className="buttons">
        <button onClick={handleAdd}>Додати зображення</button>
        <button onClick={handleIncrease}>Збільшити</button>
        <button onClick={handleDecrease}>Зменшити</button>
        <button onClick={handleRemove}>Видалити зображення</button>
      </div>
    </div>
  );
}

export default Image;
