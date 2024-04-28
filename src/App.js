
import './App.css';
import Header from './components/Header';
import BankData from './data/Bank';

import Transaction from './components/Transactions';
import TransactionForm from './components/TransactionsForm';
import SearchBar from './components/SearchBar';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([])
  // Fetch Transactions
  useEffect(() => {
    fetch("https://transactions-api-psi.vercel.app/transactions")
      .then(resp => resp.json())
      .then(data => setTransactions(data))
  }, [])
  //ADD New Transaction
  function addTransaction(transaction) {
    setTransactions([...transactions, transaction])
  }
  return (
    <div className="App">
      <Header name={BankData.name} />
      <SearchBar />
      <TransactionForm  addTransaction={addTransaction}/>
      <Transaction transactions={transactions}/>
      
      

    </div>
  );
}

export default App;
