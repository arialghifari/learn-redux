import React from "react";

import Color from "../components/Color";
import { useColorsQuery } from "../services/colorsApi";

const ColorList = () => {
  const { data, error, isLoading } = useColorsQuery();

  const loadData = isLoading ? (
    <>Loading...</>
  ) : (
    data.data.map((item) => <Color key={item.id} item={item} />)
  );

  return (
    <div className="color-list">
      {error ? <>Oh no, there was an error</> : loadData}
    </div>
  );
};

export default ColorList;
