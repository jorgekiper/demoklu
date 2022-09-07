import React, { Component } from 'react'
import BankInformation from './bankInformation';
import TransferMoney from './transferMoney';
import MyContacts from './myContacts';
import PaymentServices from './paymentServices';

import iconCash from '../../assets/images/icons/operaciones/cash.svg';
import iconCard from '../../assets/images/icons/operaciones/card.svg';
import iconAccounts from '../../assets/images/icons/operaciones/accounts.svg';
import iconServices from '../../assets/images/icons/operaciones/services.svg';
import iconWorld from '../../assets/images/icons/operaciones/world.svg';
import iconDispersion from '../../assets/images/icons/operaciones/dispersión.svg';
import iconComprobante from '../../assets/images/icons/operaciones/comprobante.svg';

export default class Operations extends Component {
  render() {
    return (
      <div className="container pt-5" id="bank-stocks">
        <div className="row">
          <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills  col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="mb-4 text-start ps-4 nav-link active" id="k-pills-info-tab" data-bs-toggle="pill"
                data-bs-target="#k-pills-info" type="button" role="tab" aria-controls="k-pills-info" aria-selected="true">
                <img src={iconCash} /> Información bancaria</button>

              <button className="mb-4 text-start ps-4 nav-link" id="k-pills-envio-tab" data-bs-toggle="pill"
                data-bs-target="#k-pills-envio" type="button" role="tab" aria-controls="k-pills-envio" aria-selected="false">
                <img src={iconCard} /> Enviar dinero</button>

              <button className="mb-4 text-start ps-4 nav-link" id="k-pills-cuentas-tab" data-bs-toggle="pill"
                data-bs-target="#k-pills-contactos" type="button" role="tab" aria-controls="k-pills-contactos"
                aria-selected="false">
                <img src={iconAccounts} /> Mis contactos</button>

              <button className="mb-4 text-start ps-4 nav-link" id="k-pills-servicios-tab" data-bs-toggle="pill"
                data-bs-target="#k-pills-pago-servicios" type="button" role="tab" aria-controls="k-pills-pago-servicios"
                aria-selected="false">
                <img src={iconServices} /> Pago de servicios</button>

              <button className="mb-4 text-start ps-4 nav-link" id="k-pills-transacción-tab" data-bs-toggle="pill"
                data-bs-target="#v-pills-transacción" type="button" aria-controls="v-pills-transacción" aria-selected="false">
                <img src={iconWorld} /> Transferencias internacionales </button>

              <button className="mb-4 text-start ps-4 nav-link" id="k-pills-dispersion-tab" data-bs-toggle="pill"
                data-bs-target="#k-pills-dispersion" type="button" aria-controls="k-pills-dispersion" aria-selected="false">
                <img src={iconDispersion} /> Dispersión masiva</button>

              <button className="mb-4 text-start ps-4 nav-link" id="k-pills-estado-tab" data-bs-toggle="pill"
                data-bs-target="#k-pills-estado" type="button" aria-controls="k-pills-estado" aria-selected="false">
                <img src={iconComprobante} /> Estado de cuenta </button>
            </div>

            <div className="tab-content col-9 klu-info-container bg-light" id="v-pills-tabContent">
              <div className="tab-pane fade show active " id="k-pills-info" role="tabpanel" aria-labelledby="k-pills-info-tab">
                <BankInformation></BankInformation>
              </div>
              <div className="tab-pane fade" id="k-pills-envio" role="tabpanel" aria-labelledby="k-pills-envio-tab">
                <TransferMoney></TransferMoney>
              </div>
              <div className="tab-pane fade" id="k-pills-contactos" role="tabpanel" aria-labelledby="k-pills-contactos-tab">
                <MyContacts></MyContacts>
              </div>
              <div className="tab-pane fade " id="k-pills-pago-servicios" role="tabpanel" aria-labelledby="k-pills-pago-servicios-tab">
                <PaymentServices></PaymentServices>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
