import React, { useState } from 'react'

export const GetPassword = ({conGetNewPassWord}) => {

    const [inputPasswordValue, setinputPasswordValue] = useState('');

    const getPassword = (e,done) => {
        const inputPassword = document.getElementById('logn-input-password').value;
        console.log(inputPassword);
        conGetNewPassWord(inputPassword.trim());
    }

    const onInputChange = (e) => {
        setinputPasswordValue(e.target.value)
    }


    return (
        <>
              <div className="pt-5">
                  <label className="form-label">Contraseña</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="logn-input-password" 
                  placeholder="*********" 
                  value={inputPasswordValue} 
                  onChange={ onInputChange }
                  />
              </div>
    
              <div className="login__buttons">
                  <div className="pt-5">
                      <button className="btn btn-secondary login__button" onClick={getPassword}>Iniciar sesión</button>
                  </div>
                  <div className="pt-3">
                      <button className="btn btn-primary login__button">¿Olvidaste tu contraseña?</button>
                  </div>
                  <div className="pt-3">
                      <button className="btn btn-primary login__button">Volver al correo electrónico</button>
                  </div>
              </div>
        </>
      )
}
