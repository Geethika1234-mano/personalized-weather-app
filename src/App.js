import { Loginform } from "./components/Loginform";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Weather from "./components/Weather"

function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Loginform/>}></Route>
          <Route path="/weather" element={<Weather/>}></Route>
        </Routes>
      </Router>
    </div>
    <Router>
        <Routes>
          <Route path="/weather" element={<Weather/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
