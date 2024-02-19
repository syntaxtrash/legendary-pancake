import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const message = items.length === 0 && <p>The list is empty</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>This is a list for {heading}</h1>

      <ul className="list-group">
        {message}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
