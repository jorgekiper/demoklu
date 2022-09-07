import iconTicket from '../../../assets/images/icons/movements/ticket-black.svg';
export const MovementItem = (
    {   numeroOperacion=0,
        fecha='',
        descripcion='',
        cargos='--',
        abonos='--',
        saldo=0,
        divisa='MXN',
        estatus=''
    }) => {



    const statusMovementColor = (estatus) => {
         if('Pendiente'==estatus){
            return 'last-movements__status--earring';
         }

         if('Rechazado'==estatus){
            return 'last-movements__status--refused';
         }

         return 'last-movements__status--accepted';
    }

    return (
        <>
            <tr>
                <th scope="row">{numeroOperacion}</th>
                <td>{fecha}</td>
                <td className='text-uppercase'>{descripcion.length>9?descripcion.substr(0,9)+'...':descripcion}</td>
                <td>{cargos.includes('--')?cargos:'$'+cargos}</td>
                <td>{abonos.includes('--')?abonos:'$'+abonos}</td>
                <td>{saldo}</td>
                <td className={statusMovementColor(estatus)}>{estatus}</td>               
                <td><a href="#">
                    <img className="last-movements__ticket"
                        src={iconTicket} alt="Ticket Icon" />
                </a></td>
            </tr>
        </>
    )
}
