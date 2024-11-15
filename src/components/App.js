import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Shoes", quantity: 2, packed: false },
  { id: 5, description: "Plane Tickets", quantity: 5, packed: true },
  { id: 6, description: "Books", quantity: 3, packed: false },
  { id: 7, description: "Sleeping Pills", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems); // use if want to start app with items
  //const [items, setItems] = useState([]); // use if want to start app empty

  function handleAddItems(item) {
    //setItems((items) => items.push(item)); // This is not allowed because cannot change state so need to make new array
    setItems((items) => [...items, item]); // This returns new array with an additional item
  }

  function handleDeleteItem(id) {
    console.log("Deleting...", id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
