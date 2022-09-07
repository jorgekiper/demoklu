import React from 'react'
import iconEye from '../../../assets/images/icons/operaciones/dispersion/eye.svg';
import iconEyeColor from '../../../assets/images/icons/operaciones/dispersion/eye-color.svg';
import iconEyeGray from '../../../assets/images/icons/operaciones/dispersion/eyes-color-gray.svg';
import iconWarning from '../../../assets/images/icons/operaciones/dispersion/warning.svg';

export const DispersionOne = () => {
  return (
    <div className="primera">
    <div className="botonera__titlegroup">
        <h4 className="botonera__title">Dispersión masiva <span className='botonera__subtitle'>(Historial)</span></h4>
    </div>
    <table className="table table-striped text-center dispersion__tableinfo" id="myTable">
        <thead className="botonera__container-table-title">
            <tr>
                <th scope="col">ID de dispersión</th>
                <th scope="col">Fecha</th>
                <th scope="col">Total</th>
                <th scope="col">Acciones/Estatus</th>
            </tr>
        </thead>
        <tbody className="botonera__container-tabla-body">
            <tr className="botonera__container-tabla-body-tr">
                <th scope="row">0298ff8w88(9%0</th>
                <td>17/03/1998 - 08:35 pm </td>
                <td>$8,000.00</td>
                <td>Finalizado</td>

                <td>

                    <a>
                        <img src={iconEye}  alt="ticket" />
                    </a>
                </td>
            </tr>
            <tr className="botonera__container-tabla-body-tr">
                <th scope="row">0298ff8w88(9%0</th>
                <td>17/03/1998 - 08:35 pm </td>
                <td>$8,000.00</td>
                <td><span className="dispersion__programada">Programada</span></td>

                <td>

                    <a>
                        <img src={iconEyeGray} alt="ticket"/>
                    </a>
                </td>
            </tr>
            <tr className="botonera__container-tabla-body-tr">
                <th scope="row">0298ff8w88(9%0</th>
                <td>17/03/1998 - 08:35 pm </td>
                <td>$8,000.00</td>
                <td><span className="dispersion__enproceso">En proceso</span></td>

                <td>

                    <a>
                        <img src={iconEyeColor} alt="ticket"/>
                    </a>
                </td>
            </tr>
            <tr className="botonera__container-tabla-body-tr">
                <th scope="row">0298ff8w88(9%0</th>
                <td>17/03/1998 - 08:35 pm </td>
                <td>$8,000.00</td>
                <td><span className="dispersion__enproceso">En proceso</span></td>

                <td>

                    <a>
                        <img src={iconEyeColor} alt="ticket"/>
                    </a>
                </td>
            </tr>
            <tr className="botonera__container-tabla-body-tr">
                <th scope="row">0298ff8w88(9%0</th>
                <td>17/03/1998 - 08:35 pm </td>
                <td>$8,000.00</td>
                <td><span className="dispersion__enproceso">En proceso</span></td>

                <td>

                    <a>
                        <img src={iconWarning} alt="ticket"/>
                    </a>
                </td>
            </tr>
            <tr className="botonera__container-tabla-body-tr">
                <th scope="row">0298ff8w88(9%0</th>
                <td>17/03/1998 - 08:35 pm </td>
                <td>$8,000.00</td>
                <td>Finalizado</td>

                <td>

                    <a>
                        <img src={iconEye} alt="ticket" />
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    <div className="row">
        <div className="col-6">
        </div>
        <div className="col-6 d-grid gap-2 mx-auto">
            <button className="btn btn-secondary botonera__inputs" type="submit">Crear
                dispersión masiva</button>
        </div>
    </div>
</div>
  )
}
