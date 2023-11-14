import './App.css';
import './styles.css';
// import LinesChart from './linesCharts';
import SidebarComponent from './components/sidebarComponent/sidebarComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">
      <SidebarComponent />
      {/* <Button variant="primary">¡Hola, Bootstrap!</Button>
      
      <LinesChart />
      <DoughnutChart /> */}
    </div>
  );
}

export default App;
