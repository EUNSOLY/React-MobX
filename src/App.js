import "./App.css";
import { observer } from "mobx-react";
import { CounterContext } from "./context/counterContext";
import { useContext } from "react";

function App() {
  const myCounter = useContext(CounterContext);

  return (
    <div className="App" style={{ textAlign: "center", padding: 16 }}>
      카운트 : {myCounter.count}
      <br />
      <br />
      마이너스 인가요? : {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
}

export default observer(App);
