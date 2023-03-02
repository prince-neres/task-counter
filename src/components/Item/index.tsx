import { iTask } from "../../types/tasks";
import style from "./Item.module.scss";

interface Props extends iTask {
  selectTask: (taskSelected: iTask) => void;
};

export default function Item ({name, time, selected, completed, id, selectTask }: Props) {
  return (
    <li 
      className={style.item} 
      onClick={() => selectTask(
          {
            name,
            time,
            selected,
            completed,
            id
          }
        )
      }>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
};
