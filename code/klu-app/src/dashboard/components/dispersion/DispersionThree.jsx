import React from 'react'
import iconCSV from '../../../assets/images/icons/operaciones/dispersion/csv-fill.svg';

export const DispersionThree = () => {
  return (
    
    <div className="tercera" >
                <div className="botonera__titlegroup">
                    <h4 className="botonera__title">Dispersión masiva</h4>
                </div>
                <div className="dispersion__rectangle">
                    <img src={iconCSV}
                        className="dispersion__image--csv" />
                    <h6 className="dispersion__rectangle--text">nomina-septiembre-2022.cvs</h6>
                </div>
                <div className="klu-px-80">
                    <table className="table dispersion__table" id="table-ticket">
                        <tbody>
                            <tr>
                                <td className="botonera__fuente-grande">Nombre de la dispersión
                                    <h5 className="botonera__fuente">nomina-septiembre-2022.cvs</h5>
                                </td>
                                <td className="botonera__fuente-grande text-end">Total de registros
                                    <h5 className="botonera__fuente"># 1820 registros</h5>
                                </td>
                            </tr>
                            <tr>
                                <td className="botonera__fuente-grande">Por una cantidad de</td>
                                <td>
                                    <h5 className="text-end dispersion__fuente--resultado">$ 2,490,288.00 MXN
                                    </h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label className="form-label dispersion__cancelar">Cancelar</label>
                    </div>
                    <div className="col-6 d-grid gap-2 mx-auto">
                        <button className="btn btn-secondary botonera__container-transferir"
                            type="submit">Dispersar</button>
                    </div>
                </div>
            </div>

  )
}
