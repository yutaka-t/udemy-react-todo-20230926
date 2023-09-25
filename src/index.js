import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// memo: waningが出ていたので独自修正
// 最新のReactは上記のようになるとのこと
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
