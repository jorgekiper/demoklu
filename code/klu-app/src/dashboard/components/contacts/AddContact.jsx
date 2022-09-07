import React from 'react'
import iconMexico from '../../../assets/images/icons/flags/mexico.svg';

export const AddContact = () => {
  return (
    <div className='botonera__tabcontainer'>
      <div className="botonera__titlegroup">
        <h4 className="botonera__title">Nuevo contacto</h4>
      </div>
      <div className='botonera__infocontainer'>
        <div className="row">
          <div className="col-6">
            <label className="form-label ">Cuenta CLABE/Número de tarjeta</label>
            <input type="text" className="form-control botonera__inputs" id="input-cta-tarjeta" />
          </div>
          <div className="col-6">
            <label className="form-label ">Beneficiario</label>
            <input type="text" className="form-control botonera__inputs" id="input-cta-tarjeta" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label ">Selecciona un banco</label>
            <select className="form-select botonera__inputs" id="select-contacto-transfer">
              <option value="1">Brenda</option>
              <option value="2">Jose</option>
              <option value="3">Dani</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label ">Alias de contacto</label>
            <input type="text" className="form-control botonera__inputs" id="input-cta-tarjeta" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label ">Correo (opcional)</label>
            <input type="text" className="form-control botonera__inputs" id="input-cta-tarjeta" />
          </div>
          <div className="col-6">
            <label className="form-label ">Número de teléfono</label>
            <div class="input-group mb-3 botonera__inputs">
              <span class="input-group-text input__flag" id="basic-addon3"><img src={iconMexico} /> +52</span>
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
          </div>
        </div>

      </div>
      <div className="botonera__footergroup">
        <button className="btn" type="submit">Regresar</button>
        <button className="btn btn-secondary botonera__inputs" type="submit">Crear contacto</button>
      </div>
    </div>
  )
}
