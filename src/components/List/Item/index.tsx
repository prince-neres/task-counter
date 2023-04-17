import { iTask } from "../../../types/tasks";
import Trash from "../../Trash";
import style from "./Item.module.scss";

interface Props extends iTask {
  selectTask: (taskSelected: iTask) => void;
  removeTask: (id: string) => void;
}

export default function Item({
  name,
  time,
  selected,
  completed,
  id,
  selectTask,
  removeTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ""} ${
        completed ? style.itemCompleted : ""
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          name,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <div className={style.infoItem}>
        <h3>{name}</h3>
        <span>{time}</span>
        <p>{completed && "Concluído"}</p>
      </div>
      <Trash onClick={() => removeTask(id)} />
    </li>
  );
}
