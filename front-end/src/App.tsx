import { useState } from "react";

function App() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "P1", quantity: 1 },
      { id: 2, title: "P2", quantity: 2 },
    ],
  });

  const handleClick = () => {
    // setPizza({
    //   ...pizza,
    //   toppings: [...pizza.toppings, "Cheeze"],
    // });

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };
  return (
    <>
      <button onClick={handleClick}>Update</button>
    </>
  );
}

export default App;
