import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import dataInfo from './data'

function App() {

  const cards = dataInfo.map(card =>{
    return (
      <Hero {...card}/>
    )
  })

  return (

    
    <div className="App">
        <Navbar/>
        {cards}
      
    </div>
  );
}

export default App;
