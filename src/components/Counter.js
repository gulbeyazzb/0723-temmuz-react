import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

import "./Counter.css";
// props Obje formatındadır

const Counter = (props) => {
  // useState Hook = function - Component Datası ve setter methodu oluşturur
  const [sayac, setSayac] = useState(100);

  // Object Destructuring
  const { userName } = props;

  console.log("Counter props: ", props);

  const arttirAction = (e) => {
    setSayac(sayac + 1);
    console.log("+ butonuna tıklandı!", sayac);
  };

  const azaltAction = (e) => {
    setSayac(sayac - 1);
    console.log("- butonuna tıklandı! ", sayac);
  };

  const resetAction = () => {
    setSayac(100);
  };

  console.log("Counter componenti render edildi! ", sayac);

  return (
    <CounterDisplay
      sayac={sayac}
      userName={userName}
      arttirAction={arttirAction}
      azaltAction={azaltAction}
      resetAction={resetAction}
    />
  );
};

export const PI = 3.14;

export default Counter;
