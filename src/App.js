import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import Box from "./component/Box";

function App() {
  // const [count, setCount] = useState(0);
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    // setCount(count + 1);
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "1234" } });
  };
  const logout = () => {
    dispatch({ type: "LOGOUT", payload: { id: "", password: "" } });
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
        <Box />
      </div>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
      <div>
        <h1>
          {id},{password}
        </h1>
      </div>
    </div>
  );
}

export default App;
