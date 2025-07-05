import React, { useState } from "react";
import { AppWindow } from "../AppWindow";
import "./Calculator.scss";

const Calculator = ({ appId }) => {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else if (val === "C") {
      setValue("");
    } else {
      setValue(value + val);
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+", 
    "C"
  ];

  return (
    <AppWindow
      appId={appId}
      title="Calculator"
      icon={<img src="/images/calculator.png" alt="Calculator" width={16} />}
    >
      <div className="calculator">
        <input className="display" value={value} readOnly />
        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={
                btn === "="
                  ? "equals"
                  : btn === "C"
                  ? "clear"
                  : ["/", "*", "-", "+"].includes(btn)
                  ? "operator"
                  : ""
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </AppWindow>
  );
};

export default Calculator;
