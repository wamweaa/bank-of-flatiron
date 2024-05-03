
import './App.css';
import Header from './components/Header';
import BankData from './data/Bank';
import Transaction from './components/Transactions';
import TransactionForm from './components/TransactionsForm';
import { useEffect } from 'react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

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
  //function to handle search
  const handleSearch = (searchItem) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchItem.toLowerCase())
    );
    setTransactions(filtered);
  }
  return (
    <div className="App">
      <Header name={BankData.name} />
      <SearchBar onSearch={handleSearch} />
      <TransactionForm addTransaction={addTransaction} />
      <Transaction transactions={transactions} />
    </div>
  );
}

export default App;
