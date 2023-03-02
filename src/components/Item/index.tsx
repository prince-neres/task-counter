import { iTask } from '../../types/tasks';
import style from './Item.module.scss';

export default function Item ({name, time, select, completed, id }: iTask) {
  
  return (
    <li className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
};
