import Item from "./Item";
import style from "./List.module.scss";
import { iTask } from "../../types/tasks";

interface Props {
  tasks: iTask[];
  selectTask: (taskSelected: iTask) => void;
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item selectTask={selectTask} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}
