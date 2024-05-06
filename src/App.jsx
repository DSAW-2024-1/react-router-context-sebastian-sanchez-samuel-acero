import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Home, Login, Contact, Overview} from'./pages'
import PrivateRoute from './components/privateroute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path="/overview" element={<PrivateRoute><Overview/></PrivateRoute>}/>
            <Route path="/404" element={<div>Not Found</div>} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
