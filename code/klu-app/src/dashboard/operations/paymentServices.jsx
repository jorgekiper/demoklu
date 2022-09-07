import React, { Component } from 'react';

import iconTelefonia from '../../assets/images/icons/operaciones/services/telefonia.svg';
import iconInternetTelefono from '../../assets/images/icons/operaciones/services/internet-telefono.svg';
import iconServiciosGenerales from '../../assets/images/icons/operaciones/services/servicios-generales.svg';
import iconTransporte from '../../assets/images/icons/operaciones/services/transporte.svg';

export default class PaymentServices extends Component {
  render() {
    return (
<div id="content-payment-services">
    <h4>Pago de servicios</h4>
    <div className="row">
        <div className="col-6">
            <div className="icon-telefonia">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={iconTelefonia} className="" alt="Telefonia" />
                        <h5 className="card-title">Telefonia</h5>
                        <p className="card-text">Telcel, AT&T, Movistar y más.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="col-6">
            <div className="icon-telefonia">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={iconInternetTelefono} className="" alt="Internet Telefono" />
                        <h5 className="card-title">Internet y/ telefono</h5>
                        <p className="card-text">Telmex, IZZI, Total play y más.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-6">
            <div className="icon-telefonia">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={iconServiciosGenerales} class="" alt="..." />
                        <h5 className="card-title">Servicios generales</h5>
                        <p className="card-text">Luz, Gas.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="col-6">
            <div className="icon-telefonia">
                <div className="card">
                    <div className="card-body text-center">
                        <img src={iconTransporte} className="" alt="Transporte" />
                        <h5 className="card-title">Transporte</h5>
                        <p className="card-text">PASE, Televía.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-6">

        </div>
        <div className="col-6 d-grid gap-2 mx-auto">
            <button className="btn btn-secondary" type="submit">Siguiente</button>
        </div>
    </div>
</div>
    )
  }
}
