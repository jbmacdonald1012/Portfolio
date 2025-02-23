import { useEffect, useState } from 'react';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');

  // Use your API base URL from env or fallback to localhost:5000
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  // Helper function to format date strings to MM/DD/YYYY
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/expenses`);
        if (!response.ok) {
          throw new Error('Failed to fetch expenses');
        }
        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchExpenses();
  }, [API_BASE_URL]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Amount</th>
              <th className="border px-4 py-2 text-left">Date Incurred</th>
              <th className="border px-4 py-2 text-left">Date Submitted</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Notes</th>
              <th className="border px-4 py-2 text-left">Employee Name</th>
              <th className="border px-4 py-2 text-left">Vendor Name</th>
              <th className="border px-4 py-2 text-left">Category Name</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.expense_id}>
                <td className="border px-4 py-2">${Number(expense.amount).toFixed(2)}</td>
                <td className="border px-4 py-2">{formatDate(expense.date_incurred)}</td>
                <td className="border px-4 py-2">{formatDate(expense.date_submitted)}</td>
                <td className="border px-4 py-2">{expense.status}</td>
                <td className="border px-4 py-2">{expense.notes}</td>
                <td className="border px-4 py-2">{expense.employee_name}</td>
                <td className="border px-4 py-2">{expense.vendor_name || 'N/A'}</td>
                <td className="border px-4 py-2">{expense.category_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesPage;
