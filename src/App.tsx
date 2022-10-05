import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from "./features/home/home";
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
