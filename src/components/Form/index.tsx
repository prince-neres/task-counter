import Button from "../Button";
import style from "./Form.module.scss";

export default function Form () {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label 
          htmlFor="task"
        >
          Tarefa
        </label>
        <input
          name="task"
          id="task"
          placeholder="O que você deseja estudar?"
          type="text"
        />
      </div>
      <div className={style.inputContainer}>
        <label
          htmlFor="time"
        >  
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button
        title="Adicionar"
      />
    </form>
  )
};
