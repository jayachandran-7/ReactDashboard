import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import RightSide from './components/RightSide/RightSide';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
