import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ClientForm from './pages/ClientForm';
import CustomSalesPage from './pages/CustomSalesPage'
import SalesPage from './pages/SalesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<SalesPage/>} />
        <Route path='/:id' element={<CustomSalesPage />} />
        <Route path='/form' element={<ClientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
