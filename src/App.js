import React from "react";
import NewExpenseItem from "./components/Expenses/NewExpenseItem";
import NewExpense from "./NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 290,
      date: new Date(2021, 2, 28),
    },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    { title: "Book purchase", amount: 20, date: new Date(2022, 2, 21) },
  ];

  return (
    <div>
      <NewExpense/>
      <NewExpenseItem items={expenses} />
    </div>
  );
}

export default App;
