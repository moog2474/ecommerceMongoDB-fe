import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path="/" element='/' />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
