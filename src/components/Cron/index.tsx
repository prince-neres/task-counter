import Button from "../Button"
import Clock from "./Clock"
import style from  "./Cron.module.scss"

export default function Cron () {
  return (
    <div className={style.cron}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <div>
        <Button
          title="Começar"
        />
      </div>
    </div>
  )
};
