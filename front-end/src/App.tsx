import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Banana", "Apple", "Orange", "Grapes", "Melons"];
  return (
    <>
      <ListGroup
        items={items}
        heading="A list of Fruits"
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
    </>
  );
}

export default App;
