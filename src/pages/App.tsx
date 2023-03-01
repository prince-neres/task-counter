import Cron from "../components/Cron";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.App}>
      <Form />
      <List />
      <Cron />
    </div>
  );
}

export default App;
 