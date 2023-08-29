import Counter from "../components/Counter";

const CounterPage = ({ userName }) => {
  return (
    <div>
      <h2>Counter Page</h2>
      <hr />
      <Counter userName={userName} />
    </div>
  );
};

export default CounterPage;
