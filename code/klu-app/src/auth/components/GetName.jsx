import React, { useState } from 'react'

export const GetName = ({onGetNewUserName, messageCode}) => {

    const [inputValue, setinputValue] = useState('');

    // const [isCorrectEmail, setisCorrectEmail] = useState(true);


    console.log(messageCode);
    

    const getNombre = async (e,done) => {
        const inputEmail = document.getElementById('logn-input-email').value;
        console.log(inputEmail);
        onGetNewUserName(inputEmail.trim());
    }

    const onInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const onSetCorrectMail = (messageCode) => {
        setisCorrectEmail(messageCode);
    }


  return (
    <>
          <div className="pt-5">
              <label className="form-label">Correo</label>
              <input 
              type="text" 
              className="form-control" 
              id="logn-input-email" 
              placeholder="manuel.pernia@klu.mx" 
              value={inputValue} 
              onChange={ onInputChange }
              />
               {messageCode?null:(<span class="login__message-error">Ups! ocurrio un problema verifica tus datos</span>)}
          </div>

          <div className="login__buttons">
              <div className="pt-5">
                  <button className="btn btn-secondary login__button" onClick={getNombre}>Continuar</button>
              </div>
              <div className="pt-3">
                  <button className="btn btn-primary login__button">Registrarse</button>
              </div>
          </div>
    </>
  )
}
