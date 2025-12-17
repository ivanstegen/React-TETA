import { ChangeEvent } from "react";
import "./App.css";

const App = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log("Въведена стойност:", e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Бутонът е натиснат!");
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Въведете текст тук..."
        onChange={handleInputChange}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleButtonClick}>Натисни ме</button>
    </div>
  );
};

export default App;
