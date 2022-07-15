import './App.css';
import Home from './Home';
import Input from './Input';
import Counter from './Counter';
import Header from './Header';
import Calculator from './Calculator';
import {Routes,Route} from 'react-router-dom';
import Regforms from './Regforms';
import Todo from './Todo';
import LikeDislike from './LikeDislike';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
        <Routes>
        <Route path='/Input' element={<Input/>}/>
        </Routes>
        <Routes>
        <Route path='Counter' element={<Counter/>}/>          
        </Routes>
        <Routes>
          <Route path='/Calculator' element={<Calculator/>}/>
        </Routes>
        <Routes>
          <Route path='/Regforms' element={<Regforms/>}/>
        </Routes>
        <Routes>
          <Route path='/Todo' element={<Todo/>}/>
        </Routes>
        <Routes>
          <Route path='/LikeDislike' element={<LikeDislike/>}/>
        </Routes>
    
    </div>
  );
}

export default App;
