import style from "./Button.module.scss";

type props = {
  type?: 'submit' | 'reset' | 'button' | undefined,
  title: string
};

export default function Button ({type, title}: props) {
  return (
    <button
      type={type}
      className={style.button}>
      {title}
    </button>
  )
};
