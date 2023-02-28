import Button from "../Button"

export default function Form () {
  return (
    <form>
      <div>
        <label 
          htmlFor="tarefa"
        >
          Tarefa
        </label>
        <input
          name="tarefa"
          id="tarefa"
          placeholder="O que você deseja estudar?"
          type="text"
        />
      </div>
      <div>
        <label
          htmlFor="tempo"
        >  
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button />
    </form>
  )
};
