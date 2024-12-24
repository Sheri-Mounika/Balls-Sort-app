import React, { useState } from "react";

const SortBalls = () => {
  const [balls, setBalls] = useState([]); // Original input balls
  const [sortedBalls, setSortedBalls] = useState([]); // Separate sorted balls
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateBalls = () => {
    const inputBalls = inputValue.split(",").map((ball) => ball.trim().toUpperCase());
    setBalls(inputBalls);
    setSortedBalls([]); // Reset sorted balls when new input is set
  };

  const sortBalls = () => {
    const tempBalls = [...balls]; // Make a copy of the balls array
    let low = 0,
      mid = 0,
      high = tempBalls.length - 1;

    while (mid <= high) {
      if (tempBalls[mid] === "B") {
        // Swap "B" to the beginning
        [tempBalls[low], tempBalls[mid]] = [tempBalls[mid], tempBalls[low]];
        low++;
        mid++;
      } else if (tempBalls[mid] === "G") {
        // Skip "G"
        mid++;
      } else if (tempBalls[mid] === "R") {
        // Swap "R" to the end
        [tempBalls[mid], tempBalls[high]] = [tempBalls[high], tempBalls[mid]];
        high--;
      }
    }

    setSortedBalls(tempBalls); // Update sorted balls without modifying the original input balls
  };

  return (
    <div>
      <h2>Sort Balls App</h2>
      <div>
        <input
          type="text"
          placeholder="Enter balls (e.g., R,G,B)"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={updateBalls}>Set Balls</button>
      </div>
      {balls.length > 0 && <h2>Input Balls: {balls.join(", ")}</h2>}
      {balls.length > 0 && (
        <button onClick={sortBalls}>Sort Balls</button>
      )}
      {sortedBalls.length > 0 && <h2>Sorted Balls: {sortedBalls.join(", ")}</h2>}
    </div>
  );
};

export default SortBalls;
