import { useState, useEffect } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { iTask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cron.module.scss";

interface Props {
  selected: iTask | undefined;
  finalizeTask: () => void;
};

export default function Cron ({selected, finalizeTask}: Props) {

  const [time, setTime] = useState<number>();

  useEffect(()=>{
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const regressive = (counter: number = 0) => {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        return regressive(counter -1);
      }
      finalizeTask();
    }, 1000)
  };

  return (
    <div className={style.cron}>
      <p className={style.title}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <div>
        <Button
          onClick={() => regressive(time)} 
          title="Começar"
        />
      </div>
    </div>
  )
};
