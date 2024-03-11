import * as React from "react";
import s from "./Authenticated.module.css";
import Button from "../Button";
import { BadgeAlert, Trash2 } from "lucide-react";
import { filterTasks, sortTasks } from "./utils";
import { useAuth } from "../../contexts/authContext";
import {
  createTask,
  deleteTask,
  editTask,
  getTasks,
} from "../../services/tasks";

const exampleTasks = [
  {
    id: 1234567,
    title: "Tarea de ejemplo 1",
    due_date: null,
    important: false,
    completed: true,
    user_id: 1111,
  },
  {
    id: 1234568,
    title: "Tarea de ejemplo 2",
    due_date: "2023-12-01",
    important: true,
    completed: true,
    user_id: 1111,
  },
  {
    id: 1234569,
    title: "Tarea de ejemplo 3",
    due_date: "2023-12-02",
    important: false,
    completed: false,
    user_id: 1111,
  },
];

function Authenticated() {
  const { logout } = useAuth();
  const [status, setStatus] = React.useState("idle");
  const [formStatus, setFormStatus] = React.useState("idle");
  const [tasks, setTasks] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("due_date-asc");
  const [onlyPending, setOnlyPending] = React.useState(false);
  const [onlyImportant, setOnlyImportant] = React.useState(false);

  React.useEffect(() => {
    setStatus("loading");
    getTasks().then((response) => {
      setTasks(response);
      setStatus("idle");
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData.entries());
    setFormStatus("loading");
    await createTask(taskData);
    const response = await getTasks();
    setTasks(response);
    setFormStatus("idle");
  }

  async function handleEdit(id, updates) {
    setStatus("loading");
    await editTask(id, updates);
    const response = await getTasks();
    setTasks(response);
    setStatus("idle");
  }

  async function handleDelete(id) {
    setStatus("loading");
    await deleteTask(id);
    const response = await getTasks();
    setTasks(response);
    setStatus("idle");
  }

  const isLoading = status === "loading";
  const isCreating = formStatus === "loading";

  const filteredTasks = filterTasks(tasks, {
    onlyPending: onlyPending,
    onlyImportant: onlyImportant,
  });
  const sortedTasks = sortTasks(filteredTasks, sortBy);

  return (
    <>
      <form className={s["task-form"]} onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="do the dishes"
          required
          aria-label="title"
          disabled={isCreating}
        />
        <input
          id="due_date"
          type="date"
          name="due_date"
          aria-label="due_date"
          disabled={isCreating}
        />
        <Button disabled={isCreating} onChange={handleSubmit}>
          {isCreating ? "Adding..." : "Add task"}
        </Button>
      </form>

      <div className={s["tasks-wrapper"]}>
        <aside className={s.aside}>
          <div className={s["input-group"]}>
            <label htmlFor="sort_by">Sort by</label>
            <select
              id="sort_by"
              onChange={(event) => {
                setSortBy(event.target.value);
              }}
            >
              <option value="due_date-asc">Due Date (old first)</option>
              <option value="due_date-desc">Due Date (new first)</option>
              <option value="alphabetical-asc">Alphabetical (a-z)</option>
              <option value="alphabetical-desc">Alphabetical (z-a)</option>
            </select>
          </div>
          <div className={s["input-group"]}>
            <label>Filter</label>
            <div className={s.checkbox}>
              <input
                type="checkbox"
                id="pending"
                checked={onlyPending}
                onClick={() => {
                  setOnlyPending(!onlyPending);
                }}
                readOnly
              />
              <label htmlFor="pending">Only pending</label>
            </div>
            <div className={s.checkbox}>
              <input
                type="checkbox"
                id="important"
                checked={onlyImportant}
                onClick={() => {
                  setOnlyImportant(!onlyImportant);
                }}
                readOnly
              />
              <label htmlFor="important">Only important</label>
            </div>
          </div>
          <Button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </aside>
        <div className={s["tasks-list"]}>
          {isLoading && <p>Loading...</p>}
          {tasks.length > 0 &&
            sortedTasks.map((task) => (
              <div key={task.id} className={s["task-wrapper"]}>
                <div className={s["task-data"]}>
                  <input
                    type="checkbox"
                    id={task.id}
                    checked={task.completed}
                    onChange={() => {
                      handleEdit(task.id, { completed: !task.completed });
                    }}
                  />
                  <div className={s["title-wrapper"]}>
                    <label htmlFor={task.id} className={s["task-title"]}>
                      {task.title}
                    </label>
                    <small className={s["task-due_date"]}>
                      {task["due_date"]}
                    </small>
                  </div>
                </div>
                <div className={s.actions}>
                  <Button
                    onClick={() => {
                      handleEdit(task.id, { important: !task.important });
                    }}
                  >
                    <BadgeAlert />
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(task.id);
                    }}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Authenticated;
