import React, { useState } from 'react';
import './App.css';
import TransactionsTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/SearchBar';

const App = () => {
  const initialTransactions = [
    {
      "id": 1,
      "date": "2019-12-01",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 2,
      "date": "2019-12-01",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": 3,
      "date": "2019-12-02",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": 4,
      "date": "2019-12-04",
      "description": "Sunglasses, Urban Outfitters",
      "category": "Fashion",
      "amount": -24.99
    },
    {
      "id": 5,
      "date": "2019-12-06",
      "description": "Venmo, Alice Pays you for Burrito",
      "category": "Food",
      "amount": 8.75
    },
    {
      "id": 6,
      "date": "2019-12-06",
      "description": "Chipotle",
      "category": "Food",
      "amount": -17.59
    },
    {
      "id": 7,
      "date": "2019-12-07",
      "description": "Birthday Check from Grandma",
      "category": "Gift",
      "amount": 50
    },
    {
      "id": 8,
      "date": "2019-12-09",
      "description": "Lyft Ride",
      "category": "Transportation",
      "amount": -13.25
    },
    {
      "id": 9,
      "date": "2019-12-11",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 10,
      "date": "2019-12-16",
      "description": "Tickets, Flatiron Multiplex Cinemas",
      "category": "Entertainment",
      "amount": -24
    },
    {
      "id": 11,
      "date": "2019-12-16",
      "description": "MTA Vending Machine: MetroCard",
      "category": "Transportation",
      "amount": -116.39
    },
    {
      "id": 12,
      "date": "2019-12-17",
      "description": "Venmo, Pay Roommate for Rent",
      "category": "Housing",
      "amount": -975
    },
    {
      "id": 13,
      "date": "2022-07-09",
      "description": "Office lunch",
      "category": "Food",
      "amount": 2000
    },
    
  ];

  const initialCategories = [
    "Income",
    "Food",
    "Fashion",
    "Gift",
    "Transportation",
    "Entertainment",
    "Housing"
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    // Generate a unique ID for the new transaction
    newTransaction.id = transactions.length > 0 ? Math.max(...transactions.map(transaction => transaction.id)) + 1 : 0;
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="app-container">
      <h1 className="heading">The Royal Bank of Flatiron</h1>

      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="transaction-form">
        <TransactionForm onAddTransaction={addTransaction} categories={initialCategories} />
      </div>
      <div className="transactions-table">
        <TransactionsTable transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default App;
