# Overview

This documentation serves as an addition to the ExpenseManagementService. 

This project is the frontend User Interface built using React.js and TailwindCSS that connects users to the ExpenseManagementService backend and Database for the company QuantumTech. On this website, there are a few pages that provide company data for users that are registered with the company. 

A list of pages and their content can be found below.


{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

All forms on the site are served up by the React.js framework code. Data that appears on the site is fetched from the ExpenseManagementService database via the ExpenseManagementService API. 

- Login Page: 
This page serves as the entry point to the application. Users can either login or they can click on the register link to become a member of the site. 

- Registration Page:
Here a user is provided with a form they can fill out to become a member of the site. Once the user is registered they are taken to the Dashboard page.

- Dashboard: 
Landing page after logging in to the site. User will see a page with the total amount of expenses, as well as, as summary list of expenses and which employee is responsible for the expenses.

- Expenses:
On this page, the user will be presented with a detailed view, in table format, of all expenses, who incurred them, with which vendor, and for what purpose.

- Employees:
The user is provided with a detailed view of employees and their basic information such as, name, email, pay frequency, and start/end date.


# Development Environment

This application was developed in Visual Studio Code and used the Vite tool to create the frontend application.

Libraries used:
- React.js
- TailwindCSS

# Useful Websites

* [TailWind CSS Website](https://tailwindcss.com/) - Setup and Component examples
* [React.js Documentation](https://react.dev/reference/react) - React components
* [GitHub Copilot] - VS Code extension for code suggestions and fixing errors. 

# Future Work

* Adding more than just read functionality to the Employees and Expenses pages (Add the ability to create, update, and delete data)
* Continue to update the CSS to have a more modern feel to the site
* Add an invoices page that provides data about work the company has done and how much is due for the work