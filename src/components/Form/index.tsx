import { useState } from 'react'
import Button from "../Button";
import style from "./Form.module.scss";
import { iTask } from '../../types/tasks';

export default function Form ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<iTask[]>>}) {
  const [task, setTask] = useState({
    name: "",
    time: "00:00:00"
  })

  const saveTask = (event: React.FormEvent) => {
    event.preventDefault();
    setTasks(tasks => [...tasks, task])
    setTask({
      name: "",
      time: "00:00:00"
    })
  }

  return (
    <form className={style.newTask} onSubmit={saveTask} >
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Tarefa
        </label>
        <input
          name="task"
          id="task"
          value={task.name}
          onChange={event => setTask({...task, name: event.target.value})}
          placeholder="O que você deseja estudar?"
          type="text"
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">  
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          value={task.time}
          onChange={event => setTask({...task, time: event.target.value})}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button
        type="submit"
        title="Adicionar"
      />
    </form>
  )
};
