import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../components/AuthContext';

const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/overview"><button>Overview</button> </NavLink>
      <NavLink to="/contact"><button>Contact</button> </NavLink>
      <NavLink to="/login"><button onClick={logout}>LogOut</button> </NavLink>
    </div>
  )
}

export default Home