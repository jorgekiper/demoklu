import React from 'react'

import iconDownload from '../../../assets/images/icons/operaciones/dispersion/download-yellow.svg';
import iconSplit from '../../../assets/images/icons/operaciones/dispersion/new-split-white.svg';

export const DispersionTwo = () => {
  return (
    <div className="segunda" >
    <div className="botonera__titlegroup">
        <h4 className="botonera__title">Dispersión masiva 
        <span className='botonera__subtitle'>(Crear)</span></h4>
    </div>

    <div className="botonera__addfile">
        <img src={iconSplit}  className="dispersion__image--position" />
        <div className="dispersion__elipse"></div>


        <h4 className="dispersion__seleccionar--archivo">Select a CVS file to upload</h4>
        <h2 className="dispersion__arrastrar--archivo">or drag and drop it here</h2>
    </div>
    <p className="dispersion__parrafo">*Para ingresar el número de tarjeta o cuenta clabe se debe
        colocar al inicio un apóstrofe</p>
    <p className="dispersion__parrafo--dos">(Ejemplo: '123XXX)</p>
    <div >
        <table className="table dispersion__table" id="table-ticket">
            <tbody>
                <tr>
                    <td className="ticket__text-right">Descargar lista de bancos</td>
                    <td><img src={iconDownload} /></td>
                </tr>
                <tr>
                    <td className="ticket__text-right">Descargar plantillas para SPEI</td>
                    <td><img src={iconDownload} /></td>
                </tr>
                <tr>
                    <td className="ticket__text-right">Descargar plantillas para tarjetas
                        corporativas</td>
                        <td><img src={iconDownload} /></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}
