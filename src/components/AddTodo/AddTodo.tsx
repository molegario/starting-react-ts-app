import { FC, useContext, useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./AddTodo.module.css";
import { TodoContext } from "../../store/todo-context";

// interface AddTodoProps {
//   // onAddTodo: (title: string) => void;
// }

const AddTodo: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    addTodo: onAddTodo,
  } = useContext(TodoContext);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("todo-title") as string;
    onAddTodo(title);
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="todo-title">Todo Title</label>
              <input
                type="text"
                id="todo-title"
                name="todo-title"
                placeholder="Enter todo title"
                required
              />
            </p>
            <div className={classes.actions}>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button type="submit">Add Todo</button>
            </div>
          </form>
        </Modal>
      )}
      <p className={classes.listactions}>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Todo
        </button>
      </p>
    </>
  );
};

export default AddTodo;
