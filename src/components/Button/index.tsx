import style from "./Button.module.scss";

type props = {
  title: string;
};

export default function Button ({title}: props) {
  return (
    <button className={style.button}>
      {title}
    </button>
  )
};
