import style from "./Button.module.scss";

type props = {
  type?: 'submit' | 'reset' | 'button' | undefined,
  title: string,
  onClick?: () => void
};

export default function Button ({type, title, onClick}: props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.button}>
      {title}
    </button>
  )
};
