import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemCost, itemDueDate) => {
    console.log(`New Item Title Added: ${itemName}  Cost is : ${itemCost} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, cost: itemCost,dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      {/* <div className="a"> */}
      <AddTodo onNewItem={handleNewItem} />
      
      <div className="a">
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems></div>
    </center>
  );
}

export default App;
