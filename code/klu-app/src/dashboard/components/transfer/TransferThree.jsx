import React from 'react'

export const TransferThree = () => {
  return (
    <div className="tercera" >
    <div className="botonera__titlegroup">
        <h4 className="botonera__title">Enviar dinero </h4>
    </div>
    <div className="botonera__tabpane--messagesuccess">
        <img src="./assets/klu/img/icons/exito.svg" />
        <h2 className="botonera__resultado--exito">¡Exito!</h2>
        <p className="botonera__resultado--parrafo">Tu transferencia se ha realizado
            <br className="text-center" />
            correctamente
        </p>
    </div>
        <div className="row">
            <div className="col-6">
               
            </div>
            <div className="col-6 d-grid gap-2 mx-auto">
                <button className="btn btn-secondary botonera__inputs botonera__btncentro" type="submit">Continuar</button>
            </div>
        </div>
    
</div>
  )
}
