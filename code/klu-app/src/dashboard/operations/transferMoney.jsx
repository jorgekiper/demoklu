import React, { Component } from 'react'

export default class TransferMoney extends Component {
  render() {
    return (
      <div id="content-send-money">
                            <h4 className="klu-envio">Enviar dinero</h4>
                            <div className="row">
                                <div className="col-6">
                                    <label for="select-contacto-transfer" className="form-label">Selecciona un contacto</label>
                                    <select className="form-select" id="select-contacto-transfer">
                                        <option selected="">...</option>
                                        <option value="1">Brenda</option>
                                        <option value="2">Jose</option>
                                        <option value="3">Dani</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label for="input-cta-tarjeta" className="form-label">Cuenta CLABE/Número de tarjeta</label>
                                    <input type="text" className="form-control" id="input-cta-tarjeta" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label for="select-banco-transfer" className="form-label">Selecciona un banco</label>
                                    <select className="form-select" id="select-banco-transfer">
                                        <option selected="">...</option>
                                        <option value="1">Banamex</option>
                                        <option value="2">Banco Azteca</option>
                                        <option value="3">Santander</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label for="input-beneficiario" className="form-label">Beneficiario</label>
                                    <input type="text" class="form-control" id="input-beneficiario" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label for="input-alias-contacto" className="form-label">Alias de contacto</label>
                                    <input type="text" className="form-control" id="input-alias-contacto" />
                                </div>
                                <div className="col-6">
                                    <label for="input-contepto" className="form-label">Concepto</label>
                                    <input type="text" className="form-control" id="input-contepto" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label for="input-ref-numerica" className="form-label">Referencia númerica (Max. 7)</label>
                                    <input type="number" className="form-control" id="input-ref-numerica"  />
                                </div>
                                <div className="col-6">
                                    <label for="input-monto-envio" className="form-label">Ingresa un monto</label>
                                    <input type="number" className="form-control" id="input-monto-envio" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                   
                                </div>
                                <div className="col-6 d-grid gap-2 mx-auto pt-3">
                                    <button className="btn btn-secondary" type="submit">Transferir</button>
                                </div>
                            </div>
                        </div>
    )
  }
}
