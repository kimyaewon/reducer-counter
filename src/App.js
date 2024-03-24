import logo from './logo.svg';
import './App.css';
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/store";


function App() {
  const dispatch = useDispatch();

  //import한 리듀서 이름을 그대로 사용하는 경우
  const count = useSelector((state) => state.counter.number);

  return (
    <div className={"test"}>


      <div>
        <div>

          <h1>COUNTER</h1>
          <h4>{count}</h4>
          <br />
          <button onClick={() => dispatch(increment())} > + </button>
          <button onClick={() => dispatch(decrement())} > - </button>
        </div>
      </div>

    </div>
  );
}


export default App;
