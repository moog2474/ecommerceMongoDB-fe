import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import ProductList from './components/ProductList'
import Menu from './components/Menu';
import Category from './components/Category';
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
