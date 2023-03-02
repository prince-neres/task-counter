import Item from "../Item"
import style from "./List.module.scss"
import { iTask } from '../../types/tasks';

export default function List ({tasks}: {tasks: iTask[]}) {
  return (
    <aside className={style.listTasks}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task}/>
        ))}
      </ul>
    </aside>
  )
};
