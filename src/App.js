import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/about"}>소개</Link>
        </li>
      </ul>
      <hr />
      <Route path={"/"} component={Home} exact={true} />
      <Route path={"/about"} component={About} />
    </div>
  );
};

export default App;
