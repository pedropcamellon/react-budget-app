# React Budget App
Budget Master is a powerful budgeting application built with React and React Bootstrap. It offers a range of features to help users keep track of their finances, including the ability to create and manage multiple budgets and categorize them. With this app, users can easily add, edit, and delete budgets and expenses.

Some of the React features used when building the app are:
* React Bootstrap components such as Button, Stack, and Container to build the user interface.
* React hooks like the useState hook to manage state in functional components.
* Context API: It's used for managing the application's state across components. As an example useBudgets hook is used to access and update budget-related data.
* Conditional rendering: To display or hide certain UI components based on the state of the application. For example, it shows the AddExpenseModal only when showAddExpenseModal state is true.
* Props: Data is shared between components using props. For example, main App component it's passing name, amount, max, onAddExpenseClick, and onViewExpensesClick as props to the BudgetCard component.
