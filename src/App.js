import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import ProductList from './components/admin/ProductList'
import Menu from './components/admin/Menu';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route index path="/" element={<Header />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/users' element={<Users />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/products' element={<ProductList />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
