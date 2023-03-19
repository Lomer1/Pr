import {Routes, Route} from 'react-router-dom'
import RightPanel from './components/RightPanel';
import SideBar from "./components/SaidBar";
import AnaliticsPage from './pages/AnaliticsPage';
import DashboardPage from './pages/DashboardPage';
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path='/' element={<DashboardPage/>}/>
        <Route path='/Analitics' element={<AnaliticsPage/>}/>
      </Routes>
      <RightPanel/>
    </div>
  );
}

export default App;
