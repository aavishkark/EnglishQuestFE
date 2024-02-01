import './App.css';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Creator from './Components/Creator/Creator';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
