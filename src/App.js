import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash.cash);
    const customers = useSelector( state => state.customer.customers)

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
    const addCustomer = () => {
        try{
            const value = prompt('Введите Имя?');
            const customer = {
                name: value,
                id: Date.now()
            }
            if(value){
                dispatch({type: "ADD_CUSTOMER", payload: customer})
            }
        }
        catch (e){
            console.log(e.message)
        }
    };
    const removeCustomer = (customer) => {
        try{
            if(customer){
                dispatch({type: "REMOVE_CUSTOMER", payload: customer.id})
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
              <button className="btn"
                      onClick={addCustomer}>Добавить клиента</button>
              <div>
                  {customers.length
                      ? customers.map(value => (<div key={value.id} onClick={() => removeCustomer(value)}>{value.name}</div>))
                      : <div>Клиентов нет</div>
                  }
              </div>
          </div>
      </div>
    );
}

export default App;
