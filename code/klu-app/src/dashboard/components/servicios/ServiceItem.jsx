import React from 'react'

export const ServiceItem = ({item={}}) => {
    return (
        <div className="card botonera__servicio d-flex justify-content-center">
            <button className='sn-style'>
                <img src={item?.information.urlLogo} className=""
                    alt="icon servicio" />
            </button>
        </div>
    )
}
