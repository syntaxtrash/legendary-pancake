import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: "aa", amount: 10, category: "Utility" },
		{ id: 2, description: "bb", amount: 10, category: "Utility" },
		{ id: 3, description: "cc", amount: 10, category: "Utility" },
		{ id: 4, description: "dd", amount: 10, category: "Utility" },
	]);

	if (expenses.length === 0) {
		return <p>Table is empty</p>;
	}
	return (
		<>
			<ExpenseList
				expenses={expenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((e) => e.id !== id))
				}
			/>
		</>
	);
}

export default App;
