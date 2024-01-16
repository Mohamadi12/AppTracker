import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const[name, setName]=useState('')
  const[datetime, setDatetime]=useState('')
  const[description, setDescription]=useState('')
  const [transactions,setTransactions]=useState([])
  
  // Pour obtenir
  const getTransactions=async ()=>{
    const url = "http://localhost:5000/tracker/transactions";
    const response=await fetch(url)
    const data = await response.json();
    console.log("Data from server:", data);
    return data;
  }
  useEffect(()=>{
    getTransactions().then(data => setTransactions(data.transactions));  },[])
  // Pour poster
  const addNewTransaction = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/tracker/transaction";

    // Cela me permet ajouter du prix au nom
    const price = parseFloat(name.split(' ')[0]);
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
          price,
          name: name.substring(price.toString().length + 1), 
          description, 
          datetime 
        }),
      }).then(response=>{
        response.json().then(json=>{
          setName('');
          setDescription('');
          setDatetime('');
          console.log('result',json)
        })
      })
    }
    // Calcule du balance Number
    let balance= 0;
    for(const transaction of transactions){
      balance= balance + transaction.price
    }
    // Apres la virgule mais du String
    balance=balance.toFixed(2);
    const fraction=balance.split('.')[1]
    balance=balance.split('.')[0]
  return (
    <main>
    <h1>${balance}<span>{fraction}</span></h1>
    <form onSubmit={addNewTransaction}>
      <div className='basic'>
         <input type="text" 
               value={name}
                onChange={(e)=>setName(e.target.value)}
         placeholder={'+200 news samsung tv'}/>
         <input type="datetime-local" 
              value={datetime}
              onChange={(e)=>setDatetime(e.target.value)} />
      </div>
      <div className='description'>
         <input type="text"
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}
                placeholder={'description'}/>
      </div>
      <button type='submit'>Add new transaction</button>
    </form>
    <div className="transactions">
      {transactions.length>0 && transactions.map(transaction=>(
        <div>
          <div className="transaction">
          <div className="left">
           <div className="name">{transaction.name}</div>
           <div className="description">{transaction.description}</div>
        </div>
        <div className="right">
          {console.log(transaction.price)}
          <div className={"price" +(transaction.price<0? 'red':'green')}>{transaction.price}</div>
          <div className="datetime">2024-01-11 11:19</div>
        </div>
      </div>
        </div>
      ))}
    </div>
  </main>
  );
}

export default App;
