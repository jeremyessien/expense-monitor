import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./NewExpenseItem.css";

function NewExpenseItem(props) {

  function filterChangeHandler(selectedYear){}
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter ={filterChangeHandler} />
        <ExpenseItem 
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />

        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </Card>
    </div>
  );
}

export default NewExpenseItem;
