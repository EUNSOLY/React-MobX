import "./App.css";
import { observer } from "mobx-react";

function App(props) {
  const { myCounter } = props;
  console.log(myCounter);
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
