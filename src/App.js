import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Modal from './components/admin/Modal'
import ProductNew from './components/admin/ProductNew';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path="/" element='hi' />
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/users' element={<Users />} />
          <Route path='/adduser' element={<Modal />} />
          <Route path='/products' element={<ProductNew />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
