import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../components/AuthContext';

const Contact = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Contact</h1>
      <NavLink to="/overview"><button>Overview</button> </NavLink>
      <NavLink to="/"><button>Home</button> </NavLink>
      <NavLink to="/login"><button onClick={logout}>LogOut</button> </NavLink>
    </div>
  )
}

export default Contact