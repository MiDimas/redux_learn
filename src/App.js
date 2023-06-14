import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash.cash);

    const addCash = () => {
        try{
            const value = Number(prompt('Сколько внести?'));
            if(value){
                dispatch({type: "ADD_CASH", payload: value})
            }
        }
        catch (e){
            console.log(e.message)
        }
    };
    const getCash = () => {
        try{
            const value = Number(prompt('Сколько снять?'));
            if(value){
                dispatch({type: "GET_CASH", payload: value});
            }
        }
        catch (e){
            console.log(e.message)
        }
    };

    return (
      <div className="App">
          <div style={{display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
              <div className='info'>{cash}</div>
              <button className="btn"
                      onClick={addCash}>Пополнить</button>
              <button className="btn"
                  onClick={getCash}>Снять</button>
          </div>
      </div>
    );
}

export default App;
