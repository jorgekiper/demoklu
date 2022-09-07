import { ServiceItem } from './'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../auth';
import { useFetch } from '../../../hooks';
import { LoaderFuncional } from '../../ui';

export const ServiceDetail = ({ onSetView, idCategory = 0 }) => {

    const { userLogged } = useContext(AuthContext);

    const { data, hasError, isLoading } = useFetch('Services',
        {
            userId: userLogged.userId,
            sessionId: userLogged.sessionId,
            category: idCategory,
            channel: 1
        }, idCategory);


    let arrData = [];
    if (!!data) {
        arrData = data.data;
    }


    const subTitle = (id) => {
        if(1 == id){
            return {
                title:'Telefonia',
                subTitle: 'Selecciona tu servicio'
            }
        }
        if(2 == id){
            return {
                title:'Internet/Telefono',
                subTitle: 'Selecciona tu servicio'
            }
        }
        if(3 == id){
            return {
                title:'Servicios Generales',
                subTitle: 'Selecciona tu servicio'
            }
        }
        return {
            title:'Transporte',
            subTitle: 'Selecciona tu servicio'
        }
    }

    return (
            <div className='botonera__servicecontainer'>
                <div className="botonera__titlegroup">
                    <h4 className="botonera__title">Pago de servicios  - {subTitle(idCategory).title}</h4>
                    <span className='botonera__subtitle'>{subTitle(idCategory).subTitle}</span>
                </div>
                <div className='botonera__servicecontainer--view mt-23'>
                    <div className="row">
                        {
                            arrData.map(service => (
                                <ServiceItem key={service.id} item={service} />
                            ))
                        }
                    </div>
                </div>
                <div className="botonera__servicebtngroup d-flex justify-content-end">
                    <div className="row">
                        <button className="btn btn-secondary botonera__inputs"
                            type="submit" onClick={() => onSetView(0)}>Regresar</button>
                    </div>
                </div>
                <LoaderFuncional show={isLoading} />
            </div>
    )
}
