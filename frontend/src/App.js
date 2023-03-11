import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ClientForm from './pages/ClientForm';

import SalesPage from './pages/SalesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SalesPage/>} />
        <Route path='/form' element={<ClientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
