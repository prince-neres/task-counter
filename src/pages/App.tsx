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

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Cron selected={selected} />
    </div>
  )
};

export default App;
 