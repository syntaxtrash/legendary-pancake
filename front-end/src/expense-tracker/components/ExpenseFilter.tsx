interface ExpenseFilterProps {
	onSelectCategory: (categ: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
	return (
		<select
			className="form-select"
			onChange={(event) => onSelectCategory(event.target.value)}
		>
			<option value="">All categories</option>
			<option value="Grocery">Grocery</option>
			<option value="Utility">Utility</option>
			<option value="Entertainment">Entertainment</option>
		</select>
	);
};

export default ExpenseFilter;
