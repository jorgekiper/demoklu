import React from 'react'

export const TransferTwo = () => {
  return (
    <div className="segunda" >
        <div className="botonera__titlegroup">
            <h4 className="botonera__title">Enviar dinero </h4>
        </div>
        <div className="botonera__tabpane botonera__tabpane--sendmoney">
            <div className="row">
                <div className="col-6">
                    <label for="select-contacto-transfer" className="form-label ">Selecciona un
                        contacto</label>
                    <select className="form-select botonera__inputs" id="select-contacto-transfer">
                        <option selected>...</option>
                        <option value="1">Brenda</option>
                        <option value="2">Jose</option>
                        <option value="3">Dani</option>
                    </select>
                </div>
                <div className="col-6">
                    <label for="input-cta-tarjeta"
                        className="form-label ">Cuenta CLABE/Número de
                        tarjeta</label>
                    <input type="text" className="form-control botonera__inputs" placeholder="5342 4473 5342 9067"
                        id="input-cta-tarjeta" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label for="select-banco-transfer" className="form-label ">Selecciona un
                        banco</label>
                    <select className="form-select botonera__inputs" id="select-banco-transfer">
                        <option selected>...</option>
                        <option value="1">Banamex</option>
                        <option value="2">Banco Azteca</option>
                        <option value="3">Santander</option>
                    </select>
                </div>
                <div className="col-6">
                    <label for="input-beneficiario"
                        className="form-label ">Beneficiario</label>
                    <input type="text" className="form-control botonera__inputs" placeholder="Manuel Pernia Politan"
                        id="input-beneficiario" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label for="input-alias-contacto" className="form-label ">Alias de contacto</label>
                    <input type="text" className="form-control botonera__inputs" placeholder="Manu Klu"
                        id="input-alias-contacto" />
                </div>
                <div className="col-6">
                    <label for="input-contepto"
                        className="form-label ">Correo
                        (opcional)</label>
                    <input type="text" className="form-control botonera__inputs" placeholder="manu243@gmial.com"
                        id="input-contepto" />
                </div>

            </div>
            <div className="col-6">
                <label for="input-alias-contacto" className="form-label ">Número de teléfono
                    (opcional)</label>
                <div className="input-group botonera__inputs">
                    <div className="input-group-text botonera__botongroup " id="btnGroupAddon">
                        <img src="./assets/klu/img/icons/mexico.svg" />+52
                    </div>
                    <input type="text" className="form-control " />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                   
                </div>
                <div className="col-6 d-grid gap-2 mx-auto">
                    <button className="btn btn-secondary botonera__inputs" type="submit">Guardar contacto</button>
                </div>
            </div>
        </div>
    </div>
  )
}
