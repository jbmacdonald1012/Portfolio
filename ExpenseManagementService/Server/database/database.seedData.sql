INSERT INTO Employees (first_name, last_name, email, pay_frequency, start_date, end_date)
VALUES 
  ('John', 'Smith', 'john.smith@example.com', 'Bi-weekly', '2024-01-15', NULL),
  ('Jane', 'Doe', 'jane.doe@example.com', 'Monthly',   '2024-02-01', NULL),
  ('Bob', 'Johnson', 'bob.johnson@example.com', 'Bi-weekly', '2023-09-10', NULL),
  ('Alice', 'Davis', 'alice.davis@example.com', 'Weekly', '2024-03-01', NULL);

INSERT INTO Vendors (vendor_name, contact_person, phone, email, address)
VALUES
  ('Office Depot',   'Sales Team',  '555-111-2222', 'info@officedepot.com',   '123 Office Rd'),
  ('Amazon',         'Customer Srvc','555-333-4444', 'support@amazon.com',     'Online Only'),
  ('Local Cafe',     'Ana Baker',   '555-555-1212', 'localcafe@example.com',   '10 Main St'),
  ('Digital Services','Mike Tech',  '555-999-8888', 'info@digitalservices.com','500 Tech Park');

  INSERT INTO Expense_Categories (category_name, description)
VALUES
  ('Office Supplies', 'Items like stationery, paper, toner, pens, etc.'),
  ('Travel',          'Travel-related expenses such as flights, hotels, mileage.'),
  ('Marketing',       'Advertising, promotional materials, online ads, etc.'),
  ('Software',        'Software licenses, subscriptions, or digital tools.');

  INSERT INTO Expenses (
  employee_id, vendor_id, category_id, amount,
  date_incurred, date_submitted, status, notes
)
VALUES
  (1, 1, 1, 45.75, '2024-04-10', '2024-04-11', 'Pending', 'Printer paper and folders'),
  (2, 3, 2, 250.00, '2024-05-02', '2024-05-03', 'Approved', 'Travel expenses for client meeting'),
  (3, 2, 4, 99.99, '2024-05-15', '2024-05-16', 'Pending', 'Monthly software subscription'),
  (4, 4, 3, 150.50, '2024-06-01', '2024-06-02', 'Rejected', 'Social media marketing campaign');