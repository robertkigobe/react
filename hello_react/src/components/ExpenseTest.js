import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseTest(data) {



  return (
    <div className="expense-item">
      <ExpenseDate></ExpenseDate>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">{data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseTest;
