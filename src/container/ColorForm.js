import React, { useState } from "react";
import Color from "../components/Color";
import { useAddColorMutation } from "../services/colorsApi";

const ColorForm = () => {
  const [addColor, { isLoading, data }] = useAddColorMutation();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [pantone, setPantone] = useState("");

  const handleClick = async () => {
    const newColor = { name, year, color, pantone_value: pantone };
    addColor(newColor);
    setName("");
    setColor("");
    setYear("");
    setPantone("");
  };

  return (
    <div style={{ margin: "30px" }}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="name"
      />
      <br />
      <input
        onChange={(e) => setYear(e.target.value)}
        value={year}
        placeholder="year"
      />
      <br />
      <input
        onChange={(e) => setColor(e.target.value)}
        value={color}
        placeholder="hex color: #e3e3e3"
      />
      <br />
      <input
        onChange={(e) => setPantone(e.target.value)}
        value={pantone}
        placeholder="pantone"
      />
      <br />
      <button onClick={handleClick}>Create color</button>
      {!isLoading && data && <Color item={data} />}
    </div>
  );
};

export default ColorForm;
