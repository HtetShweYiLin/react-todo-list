import './App.css';
import { KanyeRest } from './features/KanyeRest/components/KanyeRest';
import { Counter } from './features/counter/components/counter';
import Todo from './features/todo/components/todo';
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {NavBar} from './global-components/navBar/navBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className='app-wrapper'>
        <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/counter" element={<Counter />} />
              <Route path='/quote' element={<KanyeRest />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
