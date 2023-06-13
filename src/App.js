import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash);

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 5})
    };
    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 5})
    };

    return (
      <div className="App">
          <div>{cash}</div>
          <button onClick={addCash}>Пополнить</button>
          <button onClick={getCash}>Снять</button>
      </div>
    );
}

export default App;
