import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Profiles from "./component/Profiles";
import HistorySample from "./component/HistorySample";
import Switch from "react-bootstrap/Switch";

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
        <li>
          <Link to={"/profiles"}> 프로필</Link>
        </li>
        <li>
          <Link to={"/history"}> History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path={"/"} component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path={"/profiles"} component={Profiles} />
        <Route path={"/history"} component={HistorySample} />
        <Route
          //path를 따로 정의하지 않으면 모든 상화에 레더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
