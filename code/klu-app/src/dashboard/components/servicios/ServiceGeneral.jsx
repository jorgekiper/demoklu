import React from 'react'
import iconTelefonia from '../../../assets/images/icons/operaciones/services/telefonia.svg';
import iconIternetTelefono from '../../../assets/images/icons/operaciones/services/internet-telefono.svg';
import iconIServiciosGenerales from '../../../assets/images/icons/operaciones/services/servicios-generales.svg';
import iconTransporte from '../../../assets/images/icons/operaciones/services/transporte.svg';

export const ServiceGeneral = ({ onSetCategory }) => {
  return (
    <div className='botonera__servicecontainer'>
      <div className="botonera__titlegroup">
        <h4 className="botonera__title">Pago de servicios</h4>
      </div>
      <div className='botonera__servicecontainer--view mt-23'>
        <div className="row">
          <div className="col">
            <div className="card botonera__servicios">
              <button className='sn-style' onClick={() => onSetCategory(1)}>
                <div className="card-body text-center ">
                  <img src={iconTelefonia} className=""
                    alt="..." />
                  <h5 className="card-title">Telefonia</h5>
                  <p className="card-text">Telcel, AT&T, Movistar y más.</p>
                </div>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="card botonera__servicios">
              <button className='sn-style' onClick={() => onSetCategory(2)}>
                <div className="card-body text-center">
                  <img src={iconIternetTelefono}
                    className="" alt="..." />
                  <h5 className="card-title">Internet y/ telefono</h5>
                  <p className="card-text">Telmex, IZZI, Total play y más.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-34">
          <div className="col">
            <div className=" card botonera__servicios ">
              <button className='sn-style' onClick={() => onSetCategory(3)}>
                <div className="card-body text-center">
                  <img src={iconIServiciosGenerales}
                    className="" alt="..." />
                  <h5 className="card-title">Servicios generales</h5>
                  <p className="card-text">Luz, Gas.</p>
                </div>
              </button>
            </div>
          </div>

          <div className="col">
            <div className="card botonera__servicios">
              <button className='sn-style' onClick={() => onSetCategory(4)}>
                <div className="card-body text-center">
                  <img src={iconTransporte} className=""
                    alt="..." />
                  <h5 className="card-title">Transporte</h5>
                  <p className="card-text">PASE, Televía.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="botonera__servicebtngroup">
        <button className="btn btn-secondary botonera__inputs"
          type="submit">Anterior</button>
        <button className="btn btn-secondary botonera__inputs"
          type="submit">Siguiente</button>
      </div> */}
    </div>
  )
}
