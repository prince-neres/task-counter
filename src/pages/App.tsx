import { useState } from 'react'
import Cron from "../components/Cron";
import Form from "../components/Form";
import List from "../components/List";
import { iTask } from '../types/tasks';
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<iTask[]>([]);

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cron />
    </div>
  );
}

export default App;
 