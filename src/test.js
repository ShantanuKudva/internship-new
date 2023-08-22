import React from "react";

function Test({ values }) {
  const trueValues = Object.keys(values).filter((key) => values[key]);

  return (
    <div className="desktop-15">
      <h2>Desktop 15</h2>
      <ul>
        {trueValues.map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
