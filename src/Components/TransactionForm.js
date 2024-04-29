import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <label>Description:</label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <label>Category:</label>
      <input type="text" name="category" value={formData.category} onChange={handleChange} />
      <label>Amount:</label>
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} step={0.01} />
      <br></br>
      <button className='add-transaction-btn' type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;