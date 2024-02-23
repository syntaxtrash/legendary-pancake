import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
	const [selectedCategory, setCategory] = useState("");
	const [expenses, setExpenses] = useState([
		{ id: 1, description: "aa", amount: 10, category: "Utility" },
		{ id: 2, description: "bb", amount: 10, category: "Utility" },
		{ id: 3, description: "cc", amount: 10, category: "Utility" },
		{ id: 4, description: "dd", amount: 10, category: "Utility" },
	]);

	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	if (expenses.length === 0) {
		return <p>Table is empty</p>;
	}
	return (
		<>
			<div className="mb-5">
				<ExpenseForm />
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onSelectCategory={(categ) => setCategory(categ)}
				/>
			</div>
			<ExpenseList
				expenses={visibleExpenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((e) => e.id !== id))
				}
			/>
		</>
	);
}

export default App;
