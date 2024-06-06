import React, { useState } from 'react';
import './botones.css';
import { useNavigate } from 'react-router-dom';

const Encabezado = () => {
  const [idioma, setIdioma] = useState('Español');

  const manejarCambioIdioma = (e) => {
    setIdioma(e.target.value);
    // Lógica adicional para cambiar el idioma (por ejemplo, actualizar contexto, llamar a una API, etc.)
    console.log(`Idioma }_cambiado a: ${e.target.value}`);
  };

  const navigate = useNavigate();
  const manejarCerrarSesion = () => {
    // Lógica para cerrar la sesión del usuario (por ejemplo, limpiar un token, redirigir a la página de login, etc.)
    navigate('/login');
  };

  return (
    <div className="encabezado">
    <nav className='navbar'>
        <h2 className='logo'> NEtTV</h2>
        <div className='botones'>
        <ul>
        <select
            value={idioma}
            onChange={manejarCambioIdioma}
            className="boton-idioma"
            >
            <option value="Español">Español</option>
            <option value="English">English</option>
            {/* Agrega más idiomas según sea necesario */}
        </select>
        <button
            onClick={manejarCerrarSesion}
            className="boton-cerrar-sesion"
            >
            Iniciar sesión
        </button>
        </ul>
        </div>
    </nav>
    </div>
  );
};

export default Encabezado;