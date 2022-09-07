import React from 'react'

export const TransferOne = () => {
  return (
    <div className="d-flex justify-content-center">
        <div className='botonera__tabcontainer'>
            <div className="botonera__titlegroup">
                <h4 className="botonera__title">Enviar dinero </h4>
            </div>
           
                <div className="row">
                    <div className="col-6">
                        <label  className="form-label ">Selecciona un contacto</label>
                        <select className="form-select botonera__inputs" id="select-contacto-transfer">
                            <option value="1">Brenda</option>
                            <option value="2">Jose</option>
                            <option value="3">Dani</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label  className="form-label ">Cuenta CLABE/Número de tarjeta</label>
                        <input type="text" className="form-control botonera__inputs" id="input-cta-tarjeta"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label  className="form-label ">Banco</label>
                        <select className="form-select botonera__inputs" id="select-banco-transfer">
                            <option value="1">Banamex</option>
                            <option value="2">Banco Azteca</option>
                            <option value="3">Santander</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label  className="form-label ">Beneficiario</label>
                        <input type="text" className="form-control botonera__inputs " id="input-beneficiario"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label  className="form-label ">Alias de contacto</label>
                        <input type="text" className="form-control botonera__inputs" id="input-alias-contacto"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label ">Concepto</label>
                        <input type="text" className="form-control botonera__inputs" id="input-contepto" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label  className="form-label ">Referencia númerica (Max. 7)</label>
                        <input type="text" className="form-control botonera__inputs" id="input-fer-numerica"/>
                    </div>
                    <div className="col-6">
                        <label  className="form-label ">Ingresa un monto</label>
                        <input type="text" className="form-control botonera__inputs" id="input-monto-envio"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        
                    </div>
                    <div className="col-6 d-grid gap-2 mt-3">
                        <button className="btn btn-secondary botonera__inputs" type="submit">Transferir</button>
                    </div>
                </div>
            
        </div>
    </div>
  )
}
