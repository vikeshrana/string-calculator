import React, { useState } from "react";
import { stringCalculator } from "./utils";

export default function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  function calculateSum() {
    try {
      const sum = stringCalculator(input);
      setResult(sum);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">String Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Enter numbers (e.g., 1,2,3)"
      />
      <button
        onClick={calculateSum}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full hover:bg-blue-600"
      >
        Calculate
      </button>
      {result !== null && (
        <p className="mt-3 text-green-600 font-semibold">Result: {result}</p>
      )}
    </div>
  );
}
