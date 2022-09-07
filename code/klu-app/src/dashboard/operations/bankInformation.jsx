import React, { Component } from 'react'
import iconCopy from '../../assets/images/icons/operaciones/bank-info/copy.svg';

export default class BankInformation extends Component {
  render() {
    return (
      <div id="content-bank-info">
        <h4 >Información bancaria</h4>
        <div className="row">
          <div className="col-6">
            <label for="input-beneficiario" className="form-label">Beneficiario</label>
            <div className="d-flex">
              <input type="email" className="form-control klu-standard klu-w-300" id="input-beneficiario" />
              <img className="" src={iconCopy}/>
            </div>
          </div>
          <div className="col-6">

            <label for="input-banco-receptor" className="form-label">Banco receptor</label>
            <div className="d-flex">
              <input type="email" className="form-control klu-standard klu-w-300" id="input-banco-receptor" />
              <img className="" src={iconCopy}/>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-6">
            <label for="input-clabe" className="form-label">Clabe</label>
            <div className="d-flex">
              <input type="email" className="form-control klu-standard klu-w-300" id="input-clabe" />
              <img className="" src={iconCopy}/>
            </div>
          </div>
          <div className="col-md-6">
            <label for="input-referencia" className="form-label">Referencia</label>
            <div className="d-flex">
              <input type="password" className="form-control klu-standard klu-w-300" id="input-referencia" />
              <img className="" src={iconCopy}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
