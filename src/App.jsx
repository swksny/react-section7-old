import "./styles.css";
import { Fragment } from "react";
import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwich = () => setIsAdmin(!isAdmin);

  return (
    <Fragment>
      {isAdmin ? <span>管理者です</span> : <span>管理者ではありません</span>}
      <button onClick={onClickSwich}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </Fragment>
  );
};

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
