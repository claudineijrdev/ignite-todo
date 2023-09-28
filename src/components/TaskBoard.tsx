import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./TaskBoard.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./Task";
import { Task as TaskModel } from "../models/task";


export function Taskboard() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newTaks, setNewTaks] = useState('')

  function HandleTaskRemove(task: TaskModel) {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  function HandleTaskCheck(task: TaskModel) {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, checked: !t.checked } : t));
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    const task = {
      id: crypto.randomUUID(),
      text: newTaks,
      checked: false
    }
    setTasks([...tasks, task])
    setNewTaks('')
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaks(event.target.value)
  }


  return (
    <div className={styles.wrapper}>
      <form className={styles.addTaskForm} onSubmit={handleCreateTask}>
        <input
          type="text"
          name="task-text"
          value={newTaks}
          onChange={handleNewTask}
          placeholder="Add a new task"
          required
        />
        <button
          type="submit"
          disabled={!newTaks}>
          Add <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.taskboard}>
        <div className={styles.taskboardHeader}>
          <div className={styles.taskboardTitle}>
            <span>Created Tasks</span>
            <div className={styles.tasksCounter}>
              {tasks.length}
            </div>
          </div>
          <div className={styles.taskboardTitle}>
            <span>Done</span>
            <div className={styles.tasksCounter}>
              {tasks.filter(t => t.checked).length}
            </div>
          </div>
        </div>
        <div className={styles.taskboardBody}>
          {
            tasks.length == 0 ? (
              <div className={styles.taskboardEmpty}>
                <ClipboardText size={64} />
                <div className={styles.taskboardEmptyText}>
                  <strong>You have no tasks</strong>
                  <span>Create a new task and organize your life</span>
                </div>
              </div>
            ) : (
              tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    handleDelete={HandleTaskRemove}
                    handleChecked={HandleTaskCheck}
                  />
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}