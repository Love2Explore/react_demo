import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
const App = () => {
  const expenses = [{ expenseDate : new Date(2021 ,2 ,29), expenseTitle : 'Car Insurance' , expenseAmount : 294.67} ,
                    { expenseDate : new Date(2021 ,2 ,29), expenseTitle : 'Car Insurance' , expenseAmount : 294.67} ]
  return (
    <div>
      <h1>Lets Get started</h1>
      <ExpenseItem title={expenses[0].expenseTitle} amount={expenses[0].expenseAmount} date={expenses[0].expenseDate}></ExpenseItem>
      <ExpenseItem title={expenses[0].expenseTitle} amount={expenses[0].expenseAmount} date={expenses[0].expenseDate}></ExpenseItem>
    </div>
  );
}

export default App;
