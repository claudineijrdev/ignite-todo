import { Header } from "./components/Header"
import './global.css'
import { Taskboard } from "./components/TaskBoard"
function App() {
  // const tasklist: Task[] = [
  //   {
  //     id: crypto.randomUUID(),
  //     text: "Estudar Typescript",
  //     checked: false
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     text: "Estudar React",
  //     checked: false
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     text: "Estudar React Native",
  //     checked: true
  //   },
  // ]

  return (
    <>
      <Header />
      <Taskboard />
    </>
  )
}

export default App
