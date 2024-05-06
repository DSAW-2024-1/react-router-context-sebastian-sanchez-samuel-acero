import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  // Verificar si el usuario ya está autenticado, si es así, redirigirlo al inicio
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/', {replace:true});
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'admin@admin.com' && password === 'admin') {
      login({ email }); 
      navigate('/', {replace:true}); // Redirige a la página deseada después de iniciar sesión
    } else {
      alert('Credenciales incorrectas')
    }
  }
  // Previene el comportamiento predeterminado del botón de tipo submit
  const handleButtonClick = (e) => {
    e.preventDefault()
    handleSubmit(e)
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        placeholder='Correo'
      />

      <input 
        type="password" 
        placeholder='Contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={handleButtonClick}>Ingresar</button>
      </form>
    </div>
  )
}

export default Login