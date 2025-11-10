import { useState , useEffect } from "react"
import './App.css'
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"

function App() {

  const [expenses , setExpenses] = useState(() => {
    const savedData = localStorage.getItem("Expenses")
    return savedData ? JSON.parse(savedData) : [];
  })

  useEffect( () => {
    localStorage.setItem("Expenses" , JSON.stringify(expenses))
  }, [expenses])

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev , expense])
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter( (item) =>  item.id !== id))
  }
 
  const totalSum = expenses.reduce( (sum , item) => sum + item.amount ,0)

  return (
    <div className="app-container">

		<h1>💰 Expense Tracker</h1>

		< ExpenseForm 
    onAddExpense={addExpense}
    />

		<h3 className="total">Total Expense: Rs: {totalSum.toFixed(2)}</h3>

		< ExpenseList 
    expenses={expenses}
    onDelete={deleteExpense}
    />
	</div>
  )
}

export default App
