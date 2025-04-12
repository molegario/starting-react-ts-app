import { FC, useState } from "react";
import Modal from "./Modal";

interface AddTodoProps {
  onAddTodo: (title: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ onAddTodo }) => {
  const [showModal, setShowModal] = useState(false);

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
            <div className="actions">
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button type="submit">Add Todo</button>
            </div>
          </form>
        </Modal>
      )}
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Todo
      </button>
    </>
  );
};


export default AddTodo;