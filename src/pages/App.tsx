import { useState } from "react";
import Cron from "../components/Cron";
import Form from "../components/Form";
import List from "../components/List";
import { iTask } from "../types/tasks";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<iTask[]>([]);
  const [selected, setSelected] = useState<iTask>();
  const selectTask = (taskSelected: iTask) => {
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task =>({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  };

  const finalizeTask = () => {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks =>
      oldTasks.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        })
      )
    };
  };

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Cron
        finalizeTask={finalizeTask}
        selected={selected}
      />
    </div>
  )
};

export default App;
 