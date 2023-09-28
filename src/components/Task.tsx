import { Trash } from "phosphor-react"
import styles from "./Task.module.css"
import { Task as TaskModel } from "../models/task"

interface TaskProps {
  task: TaskModel
  handleDelete: (task: TaskModel) => void
  handleChecked: (task: TaskModel) => void
}

export function Task({ task, handleDelete, handleChecked }: TaskProps) {
  function onCheck() {
    handleChecked(task)
  }

  function onDelete() {
    handleDelete(task)
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" checked={task.checked} onChange={onCheck} />
      <p className={task.checked ? styles.checked : styles.unchecked}>{task.text}</p>
      <button onClick={onDelete} value={task.id}><Trash size={20} /></button>
    </div>
  )
}