import style from "./Clock.module.scss";

interface Props {
  time: number | undefined
};

export default function Clock ({ time = 0 }: Props) {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  const [minutesDez, minutesUni] = String(minutes).padStart(2, "0");
  const [secondDez,secondUni] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minutesDez}</span>
      <span className={style.clockNumber}>{minutesUni}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondDez}</span>
      <span className={style.clockNumber}>{secondUni}</span>
    </>
  )
};
