import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from "./features/home/home"
// import Router from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
