import { useState } from "react";

export default function AddExpense() {
  const [expense, setExpense] = useState({
    type: "",
    amount: ""
  });

  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount" && Number(value) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expense.type === "" || expense.amount === "") {
      alert("Please fill all fields");
      return;
    }

    setExpenses([...expenses, expense]);

    if (expense.type === "income") {
      setTotal((prev) => prev + Number(expense.amount));
    } else {
      setTotal((prev) => prev - Number(expense.amount));
    }

    setExpense({
      type: "",
      amount: ""
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "50px" }}>
      
      {/* LEFT SIDE FORM */}
      <div style={{ width: "40%" }}>
        <h2>Total Balance: {total}</h2>

        <form onSubmit={handleSubmit}>
          <select name="type" value={expense.type} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Grocery">Grocery</option>
            <option value="Travelling">Travelling</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
            <option value="income">Income</option>
          </select>

          <br /><br />

          <input
            type="number"
            placeholder="Enter amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />

          <br /><br />

          <button type="submit">Add Expense</button>
        </form>
      </div>

      {/* RIGHT SIDE HISTORY */}
      <div style={{ width: "50%", borderLeft: "2px solid gray", paddingLeft: "20px" }}>
        <h2>History</h2>

        {expenses.length === 0 ? (
          <p>No expenses added</p>
        ) : (
          expenses.map((exp, i) => (
            <p key={i}>
              {exp.type} : {exp.amount}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
