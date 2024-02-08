import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [cost, setCost] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName,cost, dueDate);
    setDueDate("");
    setCost("");
    setTodoName("");
  };

  return (
    
    <div className="container text-center">
      <div className="row kg-row rows ">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Expense Title"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            placeholder="Enter Cost"
            value={cost}
            onChange={handleCostChange}
          />
        </div>
        <div className="col-3">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-light kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
