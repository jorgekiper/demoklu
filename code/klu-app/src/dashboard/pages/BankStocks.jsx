import {InfoBank,Transfer,Contacts,ServicePay,MassDispersion} from '../components';
import iconCash from '../../assets/images/icons/operaciones/cash.svg';
import iconCard from '../../assets/images/icons/operaciones/card.svg';
import iconAccount from '../../assets/images/icons/operaciones/accounts.svg';
import iconServices from '../../assets/images/icons/operaciones/services.svg';
import iconWorld from '../../assets/images/icons/operaciones/world.svg';
import iconDispersion from '../../assets/images/icons/operaciones/dispersión.svg';
import iconComprobante from '../../assets/images/icons/operaciones/comprobante.svg';
import '../../assets/theme/base/botonera-component-style-v1.0.css';

export const BankStocks = () => {


  return (
    <div className="container botonera">
    <div className="row d-flex justify-content-between">
        <div className="col-md-3 right-container">
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills botonera__btngroup" id="v-pills-tab" role="tablist"
                    aria-orientation="vertical">
                    <button className=" text-start botonera__btnitem  nav-link active " id="k-pills-info-tab"
                        data-bs-toggle="pill" data-bs-target="#k-pills-info" type="button" role="tab"
                        aria-controls="k-pills-info" aria-selected="true">
                        <img className="botonera__iconos" src={iconCash} /> Información
                        bancaria</button>

                    <button className=" text-start botonera__btnitem  nav-link " id="k-pills-envio-tab"
                        data-bs-toggle="pill" data-bs-target="#k-pills-envio" type="button" role="tab"
                        aria-controls="k-pills-envio" aria-selected="false">
                        <img className="botonera__iconos" src={iconCard} /> Enviar
                        dinero</button>

                    <button className=" text-start botonera__btnitem  nav-link " id="k-pills-cuentas-tab"
                        data-bs-toggle="pill" data-bs-target="#k-pills-contactos" type="button" role="tab"
                        aria-controls="k-pills-contactos" aria-selected="false">
                        <img className="botonera__iconos" src={iconAccount} />
                        Mis contactos</button>

                    <button className=" text-start botonera__btnitem  nav-link" id="k-pills-servicios-tab"
                        data-bs-toggle="pill" data-bs-target="#k-pills-pago-servicios" type="button" role="tab"
                        aria-controls="k-pills-pago-servicios" aria-selected="false">
                        <img className="botonera__iconos" src={iconServices} />
                        Pago de servicios</button>

                    {/* <button className=" text-start botonera__btnitem  nav-link " id="k-pills-transacción-tab"
                        data-bs-toggle="pill" data-bs-target="#v-pills-transacción" type="button"
                        aria-controls="v-pills-transacción" aria-selected="false">
                        <img className="botonera__iconos" src={iconWorld} /> Transferencias
                        internacionales </button> */}

                    <button className=" text-start botonera__btnitem  nav-link " id="k-pills-dispersion-tab"
                        data-bs-toggle="pill" data-bs-target="#k-pills-dispersion" type="button"
                        aria-controls="k-pills-dispersion" aria-selected="false">
                        <img className="botonera__iconos" src={iconDispersion} /> Dispersión
                        masiva</button>

                    <button className=" text-start botonera__btnitem  nav-link " id="k-pills-estado-tab"
                        data-bs-toggle="pill" data-bs-target="#k-pills-estado" type="button"
                        aria-controls="k-pills-estado" aria-selected="false">
                        <img className="botonera__iconos" src={iconComprobante}  /> Estado de  cuenta </button>
                </div>
            </div>

        </div>
        <div className="col-md-9 left-container botonera__tabcontent">
            <div className="tab-content " id="v-pills-tabContent">
               
              <InfoBank/>

              <Transfer/>

              <Contacts/>
              
              <ServicePay/>

              <MassDispersion/>

            </div>
        </div>

    </div>
</div>
  )
}
