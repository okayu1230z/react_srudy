import { createRoot } from "react-dom/client";
import { App } from "./App";

// import { ReactDOM } from "react-dom";
// ReactDOM.renderは第1引数にrender対象、第2引数にrender箇所を設定する
//ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.renderはnode 18からsupportされておらず、createRootを使用する
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = createRoot(document.getElementById("root"));
root.render(<App />);
