import { useState } from "react";

function WithUseState() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (!text.trim()) {
        alert("P")
    } else {
   
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
    }  
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setEditingId(id);
    setEditingText(todo.text);
  };
  const saveEdit = () => {
    setTodos(todos.map(todo => 
      todo.id === editingId ? { ...todo, text: editingText } : todo
    ));
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      <h2>Todo App (useState)</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add todo" />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}v >
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => toggleComplete(todo.id)}>Toggle</button>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editingId && (
        <div>
          <input value={editingText} onChange={(e) => setEditingText(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </div>
      )}
    </div>
  );
}

export default WithUseState;

