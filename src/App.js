import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, asyncAddCashAction, asyncGetCashAction, getCashAction} from "./store/reducers/cashReducer";
import {addCustomerAction, asyncAddManyCustomersAction, removeCustomerAction} from "./store/reducers/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash.cash);
    const customers = useSelector( state => state.customer.customers)

    const addCash = () => {
        try{
            const value = Number(prompt('Сколько внести?'));
            if(value){
                dispatch(addCashAction(value))
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
                dispatch(getCashAction(value));
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
                dispatch(addCustomerAction(customer))
            }
        }
        catch (e){
            console.log(e.message)
        }
    };
    const removeCustomer = (customer) => {
        try{
            if(customer){
                dispatch(removeCustomerAction(customer.id))
            }
        }
        catch (e){
            console.log(e.message)
        }
    };
    console.log(dispatch)
    return (
      <div className="App">
          <div style={{display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
              <div className='info'>{cash}</div>
              <button className="btn"
                      onClick={addCash}>Пополнить</button>
              <button className="btn"
                      onClick={() => dispatch(asyncAddCashAction())}>Пополнить с задержкой</button>
              <button className="btn"
                  onClick={getCash}>Снять</button>
              <button className="btn"
                  onClick={() =>dispatch(asyncGetCashAction())}>Снять с задержкой</button>
              <button className="btn"
                      onClick={addCustomer}>Добавить клиента</button>
              <button className="btn"
                      onClick={() => dispatch(fetchCustomers())}>Добавить клиентов</button>
              <button className="btn"
                      onClick={() => dispatch(asyncAddManyCustomersAction())}>Добавить клиентов через сагу</button>
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
