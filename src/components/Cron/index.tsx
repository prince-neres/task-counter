import { useState, useEffect } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { iTask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cron.module.scss";

interface Props {
  selected: iTask | undefined;
};

export default function Cron ({selected}: Props) {

  const [time, setTime] = useState<number>();

  useEffect(()=>{
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cron}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <div>
        <Button title="Começar" />
      </div>
    </div>
  )
};
