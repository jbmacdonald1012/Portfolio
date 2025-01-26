	CREATE TABLE Employees (
	employee_id      SERIAL PRIMARY KEY,
    first_name       VARCHAR(50) NOT NULL,
    last_name        VARCHAR(50) NOT NULL,
    email            VARCHAR(100) UNIQUE NOT NULL,
    pay_frequency    VARCHAR(20),
    start_date       DATE NOT NULL,
    end_date         DATE
	);

	CREATE TABLE Vendors (
    vendor_id        SERIAL PRIMARY KEY,
    vendor_name      VARCHAR(100) NOT NULL,
    contact_person   VARCHAR(100),
    phone            VARCHAR(20),
    email            VARCHAR(100),
    address          VARCHAR(200)
);

CREATE TABLE Expense_Categories (
    category_id      SERIAL PRIMARY KEY,
    category_name    VARCHAR(100) NOT NULL,
    description      TEXT
);

CREATE TABLE Expenses (
    expense_id       SERIAL PRIMARY KEY,
    employee_id      INT NOT NULL REFERENCES Employees(employee_id),
    vendor_id        INT REFERENCES Vendors(vendor_id),
    category_id      INT NOT NULL REFERENCES Expense_Categories(category_id),
    amount           NUMERIC(10,2) NOT NULL,
    date_incurred    DATE NOT NULL,
    date_submitted   DATE,
    status           VARCHAR(50),
    notes            TEXT
);