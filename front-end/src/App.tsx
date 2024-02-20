import { useState } from "react";

function App() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheeze"],
    });
  };
  return (
    <>
      <button onClick={handleClick}>Update</button>
    </>
  );
}

export default App;
