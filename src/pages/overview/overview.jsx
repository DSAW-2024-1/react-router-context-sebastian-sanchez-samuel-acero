import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../components/AuthContext';

const Overview = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Overview</h1>
      <NavLink to="/contact"><button>Contact</button> </NavLink>
      <NavLink to="/"><button>Home</button> </NavLink>
      <NavLink to="/login"><button onClick={logout}>LogOut</button> </NavLink>
    </div>
  )
}

export default Overview