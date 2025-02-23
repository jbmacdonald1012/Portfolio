import { useEffect, useState } from 'react';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
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
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/employees`);
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchEmployees();
  }, [API_BASE_URL]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Pay Frequency</th>
              <th className="border px-4 py-2 text-left">Start Date</th>
              <th className="border px-4 py-2 text-left">End Date</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td className="border px-4 py-2">
                  {employee.first_name} {employee.last_name}
                </td>
                <td className="border px-4 py-2">{employee.email}</td>
                <td className="border px-4 py-2">{employee.pay_frequency || 'N/A'}</td>
                <td className="border px-4 py-2">{formatDate(employee.start_date)}</td>
                <td className="border px-4 py-2">
                  {employee.end_date ? formatDate(employee.end_date) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesPage;
