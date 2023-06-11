import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Status from "./components/Status";

function App() {
  return (
    <div>
      <Main />
      <Routes>
        <Route path="/flight/:id" Component={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
