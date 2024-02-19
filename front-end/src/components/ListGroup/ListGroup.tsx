import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { CiCircleList } from "react-icons/ci";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style-type: none;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 10px;
  background: ${(props) => (props.active ? "aquamarine" : "none")};
`;

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const message = items.length === 0 && <p>The list is empty</p>;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <CiCircleList />
      <h1>This is a list for {heading}</h1>

      <List>
        {message}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
