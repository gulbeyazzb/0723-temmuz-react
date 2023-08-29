const CounterDisplay = ({
  sayac,
  // props drilling
  userName,
  arttirAction,
  azaltAction,
  resetAction,
}) => {
  return (
    <div className="counter-card">
      <h3>Merhaba {userName}</h3>
      <hr />
      <div className="counter">{sayac}</div>
      <div className="controls">
        <button onClick={arttirAction}>+</button>
        <button onClick={azaltAction}>-</button>
        <button onClick={resetAction}>Reset</button>
      </div>
    </div>
  );
};

export default CounterDisplay;
