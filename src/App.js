import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { About } from './components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/productos' element={<ItemListContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer/>}/>
          <Route exact path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
