import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

import "./assets/styles/index.css";

function App() {
  const content = useRoutes(routes);

  return content;
}

export default App;
