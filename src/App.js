import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            Component={route.component}
          ></Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
