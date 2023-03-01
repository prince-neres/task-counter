import Item from "../Item"
import style from "./List.module.scss"

export default function List () {

  const tasks = [
    {
      name: "React",
      time: "02:00:00"
    }
  ]

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
