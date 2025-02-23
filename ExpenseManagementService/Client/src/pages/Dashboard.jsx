import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [error, setError] = useState('');

  // Use your API base URL from env or fallback to localhost:5000
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/expenses`);
        if (!response.ok) {
          throw new Error('Failed to fetch expenses');
        }
        const data = await response.json();
        setExpenses(data);
        // Calculate the total expense amount
        const total = data.reduce((sum, expense) => sum + Number(expense.amount), 0);
        setTotalExpenses(total);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchExpenses();
  }, [API_BASE_URL]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl">Total Expenses</h2>
        <p className="text-3xl font-semibold mt-2">${totalExpenses.toFixed(2)}</p>
      </div>
      <h2 className="text-xl font-bold mt-6 mb-4">Individual Expenses</h2>
      <div className="mt-6">
        {expenses.map((expense) => (
          <div key={expense.expense_id} className="border-b py-2">
            <p className="font-medium">{expense.employee_name}</p>
            <p>${Number(expense.amount).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
