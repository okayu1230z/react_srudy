import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { TailwindCss } from "./components/TailwindCss";
import classes from "./components/CssModules.module.scss";
// https://qiita.com/y_kato_eng/items/439dae65ba13d050c91e
import "./index.css";

export const App = () => {
  console.log("console出力しています。");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  // CSS
  const blue = {
    color: "blue",
    fontSize: "20px",
  };

  // returnは1つのタグで囲われている必要がある
  return (
    // <Fragment>や<div>タグでも併用できる
    <>
      <h1>宣言的UIってなんやねん</h1>
      <p style={blue}>仮想DOM</p>
      <ColoredMessage color="red" message="シャア専用">
        DOM
      </ColoredMessage>
      <button className={classes.button} onClick={onClickButton}>
        ボタン
      </button>
      <p>{num}</p>
      <TailwindCss />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};
