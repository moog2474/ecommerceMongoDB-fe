import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import ProductList from './components/admin/ProductList'
import Menu from './components/admin/Menu';
import Category from './components/admin/Category';
import './App.css';
import Main from './pages/Main';
import LoginModal from './pages/LoginModal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />}>
          <Route index path="/" element={<Main />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/users' element={<Users />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/category' element={<Category />} />

        </Route>
      </Routes>
    </div >
  );
}

export default App;
