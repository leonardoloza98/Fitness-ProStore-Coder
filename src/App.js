import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting={"Bienvenidos a Fitness ProStore"}></ItemListContainer>
    </div>
  );
}

export default App;
