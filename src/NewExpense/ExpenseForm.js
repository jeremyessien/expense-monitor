import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //Alternate methode for calling multiple states commented out in the functions
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Listeners
  function titleChangeHandler(event) {
    // setUserInput ((prevState) =>{
    //   return {...prevState, enteredTitle : event.target.value,}
    // });
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    // setUserInput ((prevState) =>{
    //   return {...prevState, enteredAmount : event.target.value,}
    // });
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    // setUserInput ((prevState) =>{
    //   return {...prevState, enteredDate : event.target.value,}
    // });
    setEnteredDate(event.target.value);
  }

  function submitHandler(event, props) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  //Form Body
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type={"text"}
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type={"number"}
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type={"date"}
            min="2019-01-20"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
