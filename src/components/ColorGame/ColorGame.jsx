import * as React from "react";
import s from "./ColorGame.module.css";
import { getRandomColors, getStatus, rgbString, statusMessage } from "./utils";
import Button from "../Button/Button";

function ColorGame() {
  const [numOfColors, setNumOfColor] = React.useState(6);
  const [colors, setColors] = React.useState(getRandomColors(numOfColors));
  const [attempts, setAttempts] = React.useState([]);
  const [target, setTarget] = React.useState(
    Math.floor(Math.random() * colors.length)
  );
  // const [status, setStatus] = React.useState(
  //   getStatus(attempts, target, numOfColors)
  // );

  React.useEffect(() => {
    setTarget(Math.floor(Math.random() * colors.length));
  }, [colors]);

  function handleReset() {
    setAttempts([]);
    setColors(getRandomColors(numOfColors));
  }

  function handleChangeNumber(event) {
    const newNumbOfColors = +event.target.value;
    setNumOfColor(newNumbOfColors);
    setAttempts([]);
    setColors(getRandomColors(newNumbOfColors));
  }

  const status = getStatus(attempts, target, numOfColors);

  function handleClickColor(c, i) {
    setAttempts([...attempts, i]);
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Color Game</h1>
      <p className={s.description}>
        Guess which color correspond to the following RGB code
      </p>
      <div className={s["rgb-wrapper"]}>
        <div
          className={s.rgb}
          style={{
            borderColor: `rgb(${colors[target][0]},0,0)`,
          }}
        >
          {colors[target][0]}
          <h1>red</h1>
        </div>
        <div
          className={s.rgb}
          style={{
            borderColor: `rgb(${colors[target][1]},0,0)`,
          }}
        >
          {colors[target][1]}
          <h1>green</h1>
        </div>
        <div
          className={s.rgb}
          style={{
            borderColor: `rgb(${colors[target][2]},0,0)`,
          }}
        >
          {colors[target][2]}
          <h1>blue</h1>
        </div>
      </div>
      <div className={s.dashboard}>
        <div className={s["number-input"]}>
          <label htmlFor="colors"># Colors</label>
          <input
            id="colors"
            type="number"
            value={numOfColors}
            onChange={handleChangeNumber}
            step={3}
            min={3}
            max={9}
          />
        </div>
        <p className={s["game-status"]}>{statusMessage[status]}</p>
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <div className={s.squares}>
        {colors.map((color, index) => {
          const backgroundColor =
            status === "win" ? rgbString(colors[target]) : rgbString(color);
          const opacity =
            attempts.includes(index) && status !== "win" ? "0" : "100";

          return (
            <button
              key={index}
              style={{ backgroundColor, opacity }}
              onClick={() => {
                if (status === "playing") {
                  handleClickColor(color, index);
                }
              }}
              className={s.square}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ColorGame;
