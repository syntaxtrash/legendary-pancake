import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Banana", "Apple", "Orange", "Grapes", "Melon"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Fruits"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
