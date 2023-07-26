import { useState } from "react";
import Search from "./Search";

const LittleGrid = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [cellColors, setCellColors] = useState(
    new Array(9).fill("bg-blue-500")
  );

  const updateColor = (cell, isCorrect) => {
    setCellColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[cell - 1] = isCorrect ? "bg-green-500" : "bg-red-500";
      return newColors;
    });
  };

  return (
    <div className="gameWrapper mt-4 w-full col-start-4 col-span-3 row-start-2 row-span-3">
      {showSearch && (
        <Search
          setShowSearch={setShowSearch}
          selectedCell={selectedCell}
          updateColor={updateColor}
        />
      )}
      <div className="gameBoard grid grid-cols-3 gap-4">
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(1);
          }}
          className={`cell aspect-[1/1] ${cellColors[0]} border-2 border-white`}
          id="1"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(2);
          }}
          className={`cell aspect-[1/1] ${cellColors[1]} border-2 border-white`}
          id="2"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(3);
          }}
          className={`cell aspect-[1/1] ${cellColors[2]} border-2 border-white`}
          id="3"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(4);
          }}
          className={`cell aspect-[1/1] ${cellColors[3]} border-2 border-white`}
          id="4"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(5);
          }}
          className={`cell aspect-[1/1] ${cellColors[4]} border-2 border-white`}
          id="5"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(6);
          }}
          className={`cell aspect-[1/1] ${cellColors[5]} border-2 border-white`}
          id="6"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(7);
          }}
          className={`cell aspect-[1/1] ${cellColors[6]} border-2 border-white`}
          id="7"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(8);
          }}
          className={`cell aspect-[1/1] ${cellColors[7]} border-2 border-white`}
          id="8"
        ></div>
        <div
          onClick={() => {
            setShowSearch(true);
            setSelectedCell(9);
          }}
          className={`cell aspect-[1/1] ${cellColors[8]} border-2 border-white`}
          id="9"
        ></div>
      </div>
    </div>
  );
};

export default LittleGrid;
