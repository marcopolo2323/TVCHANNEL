import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePhone = email => {
        const re = /^[]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im;
        return re.test(String(email).toLowerCase());
    }

    const handleBlur = () => {
        setEmailTouched(true);
        setPasswordTouched(true);
    }

    const isEmailValid = validateEmail(email) || validatePhone(email);
    const isPasswordValid = password.length >= 4 && password.length <= 60;

    const LogotipoNetflix = () => (
        <svg src={LogotipoNetflix   } />
      );

    return (
        <div className="upper">
            <div className="logo">
            <nav>
                <Link to="/">
                        <h2>hola</h2>
                </Link>
            </nav>
            </div>
            <div className="login-div">
                <form className="login" onBlur={handleBlur}>
                    <h1>Iniciar Sesion</h1>
                    <div className="input-text">
                        <input
                            type="text"
                            name="email"
                            placeholder="Correo electronico"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => setEmailTouched(true)}
                        />
                        {emailTouched && !isEmailValid && (
                            <div className="warning-input">
                                Please enter a valid email or phone number.
                            </div>
                        )}
                    </div>
                    
                    <div className="input-text">
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onFocus={() => setPasswordTouched(true)}
                        />
                        {passwordTouched && !isPasswordValid && (
                            <div className="warning-input">
                                Your password must contain between 4 and 60 characters.
                            </div>
                        )}
                    </div>
                    
                    <div>
                        <Link to="/main">
                            <button className="signin-button">Iniciar Sesion</button>
                        </Link>
                    </div>
                    <div className='contrasena'>
                        <a href="#">Haz olvidado tu contraseña</a>
                    </div>
                    <div className="remember-flex">
                        <div>
                            <input type="checkbox" />
                            <label className="color_text">Remember me</label>
                        </div>
                    </div>
                    <div className="new-members">
                        New to Netflix? <a href="/" className="signup-link">Sign up now</a>.
                    </div>
                    <div className="protection color_link help">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='learn'>Learn more</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
