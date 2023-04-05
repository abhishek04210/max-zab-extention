import "./App.css";

import { MemoryRouter } from "react-router-dom";
import AppRoute from "./routes";


function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <AppRoute />
      </MemoryRouter>
    </div>
  );
}

export default App;
