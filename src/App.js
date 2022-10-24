import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      // id: e1,
      title: "Car Insurance",
      amount: 290,
      date: new Date(2021, 2, 28),
    },
    {
      // id: e2,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { //id: e3,
       title: "Book Purchase", amount: 20, date: new Date(2022, 2, 21) },
  ];
  return (
    <div>
      <h2>My first react code!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
