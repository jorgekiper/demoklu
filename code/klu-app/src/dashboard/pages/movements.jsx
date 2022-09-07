import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext} from '../../auth';
import { useFetch } from '../../hooks';
import {MovementItem} from '../components/movements/MovementItem'
import iconTicket from '../../assets/images/icons/movements/ticket-black.svg';
import iconUpload from '../../assets/images/icons/movements/upload.svg';
import iconCalendar from '../../assets/images/icons/movements/calendar-gray.svg';
import iconNext from '../../assets/images/icons/pagination/next.png';
import iconPrevius from '../../assets/images/icons/pagination/previus.png';
import '../../assets/theme/base/movimientos-component-style-v1.0.css';

export const Movements = () => {

    const {userLogged } = useContext(AuthContext);
    const { data, hasError, isLoading } = useFetch('HistoryMovements/Get', 
    { userId:userLogged.userId,
        sessionId:userLogged.sessionId,
        pageNumber:1,
        pageSize:10,
        channel:1,
        startDate:null,
        endDate:null},1);

    
        let arrData = [];
        if(!!data){
         arrData = data;
        }

        console.log(arrData);

    return (
        <div className="container last-movements">
            <div className="row">
                <div className="col-md-5">
                    <h4 className="last-movements__title">Últimos movimientos</h4>
                </div>
                <div className="col-md-7 d-flex justify-content-end">
                    <form className="row ">
                        <button className="last-movements__calendar">Marzo <img
                            src={iconCalendar}
                                className="last-movements__calendar--icon" /></button>
                        <button 
                        type="submit" 
                        className="btn btn-secondary last-movements__download">
                        <img className="last-movements__img-download" src={iconUpload}
                                alt="Upload Icon" />
                        Descargar listado de movimientos</button>
                    </form>
                </div>
            </div>
        <div className="row">
            <div className='last-movements__table--container sn-style'>
            <table className="table table-striped table-hover last-movements__table">
                <thead className="last-movements__table-title ">
                    <tr>
                        <th scope="col"># Transacción</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Cargos</th>

                        <th scope="col">Abonos</th>
                        <th scope="col">Saldo</th>
                        <th scope="col">Estatus</th>
                        <th scope="col">Comprobante</th>
                    </tr>
                </thead>
                <tbody className="last-movements__table-body">
                            {
                                arrData.map(movement => (
                                    <MovementItem
                                    key={movement.NumeroOperacion}
                                    numeroOperacion={movement.NumeroOperacion}
                                    fecha={movement.Detalle.Fecha}
                                    descripcion={movement.Detalle.Descripcion}
                                    cargos={movement.Detalle.Cargos}
                                    abonos={movement.Detalle.Abonos}
                                    saldo={movement.Detalle.Saldo}
                                    divisa={movement.Detalle.Divisa}
                                    estatus={movement.Detalle.Estatus}
                                    />
                                ))
                            }
                </tbody>
            </table>
            </div>
            
        </div>

        <div className="row">
            <div className="col d-flex justify-content-center last-movements__pagination">
                <nav aria-label="page navigation example " className="movements__nav">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link page-previus" href="#" aria-label="Previous">
                                <span aria-hidden="true">
                                    <img className="pagination___img--previus"
                                        src={iconPrevius} alt="Previus Icon" />
                                </span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">12</a></li>
                        <li className="page-item">
                            <a className="page-link page-next" href="#" aria-label="Next">
                                <span aria-hidden="true">
                                    <img className="pagination___img--next" src={iconNext}
                                        alt="Next Icon" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>


    )
}
