import s from "./Home.module.css";
import reactIconUrl from "../../assets/react-icon-lg.svg";
import Button from "../Button/Button";

function Home({ changeToColorPage, changeToDoablePage }) {
  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Evaluation</h1>
      <p className={s.name}>Blanca Truenque</p>
      <div className={s.buttons}>
        <Button
          onClick={() => {
            changeToColorPage();
          }}
          variant="outline"
        >
          Color Game
        </Button>
        <Button
          onClick={() => {
            changeToDoablePage();
          }}
          variant="outline"
        >
          Doable
        </Button>
      </div>
    </div>
  );
}

export default Home;
