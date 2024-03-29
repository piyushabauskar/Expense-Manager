import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expenses.js", filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
export default Expenses;
