import React, { useState,useContext } from 'react'
import { AuthContext } from '../../../auth';
import { useFetch } from '../../../hooks';
import { ContactItem } from './'

export const ListContacts = () => {

    const { userLogged } = useContext(AuthContext);
    const { data, hasError, isLoading } = useFetch('Contacts/Get',
        {
            userId: userLogged.userId,
            sessionId: userLogged.sessionId,
            pageNumber: 1,
            pageSize: 6
        }, 1);


    console.log(data);

    let arrData = [];
    if (!!data) {
        arrData = data;
    }


    return (
        <div className='botonera__tabcontainer'>
            <div className="botonera__titlegroup">
                <h4 className="botonera__title">Mis contactos</h4>
            </div>
            <div className='botonera__infocontainer'>
                <table className="table text-center botonera__tablecontacts" id="tableContacts">
                    <thead>
                        <tr>
                            <th scope="col">Banco</th>
                            <th scope="col">Clabe</th>
                            <th scope="col">Alias</th>
                            <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            arrData.map(contact => (
                                <ContactItem
                                    key={contact.Id}
                                    id={contact.Id}
                                    alias={contact.Detail.Alias}
                                    clabe={contact.Detail.Clabe}
                                    banco={contact.Detail.NombreB}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="botonera__footergroup">
            <button className="btn btn-secondary botonera__inputs" type="submit">Agregar
                        contacto</button>
            </div>
        </div>
    )
}
