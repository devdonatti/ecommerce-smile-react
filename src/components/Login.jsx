import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => { 

  const [nombre,setNombre] = useState ("");
  const [contraseña, setContraseña] = useState("");
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    if (contraseña == "" || nombre =="") {
      setError(true)
      return
    }
    setError(false)
    setUser ([nombre])
    navigate('/'); // Redirige a la página de inicio
  }

  return (
    <section className="max-w-md mx-auto p-6 rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">¿Ya tenés una cuenta? LOGUEATE</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">NOMBRE</label>
        <input
         type="text"
        className='border-b-2 border-black mt-1 block w-full px-3 py-2 focus:outline-none sm:text-sm ' 
        value={nombre}
        onChange={e => setNombre (e.target.value)}/>
        
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">CONTRASEÑA</label>
        <input
         type="password" id="password"
        className="border-b-2 border-black mt-1 block w-full px-3 py-2 focus:outline-none    sm:text-sm"
        value={contraseña}
        onChange={e=> setContraseña(e.target.value)} />
        <button className="text-black text-sm hover:underline mb-4" onClick={() => alert('Recuperar contraseña')}>
          ¿OLVIDASTE TU CONTRASEÑA?
        </button>
        <button className="w-full bg-black text-white py-2 px-4  shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">INICIAR SESION
        </button>
        <h2 className="mt-6 text-sm text-gray-600">¿No tenés cuenta aún?{' '}
          <a href="/signup" className="text-black hover:underline"><strong>Crear cuenta</strong> </a>
        </h2>
      </form>

      {error && <p>Todos los campos son obligatorios</p>}

    </section>
  );
};

export default Login;
