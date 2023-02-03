import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path="/" element='/' />
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
