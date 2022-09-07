import iconEdit from '../../../assets/images/icons/operaciones/contacts/edit.svg'; 
import iconTrash from '../../../assets/images/icons/operaciones/contacts/trash.svg'; 

export const ContactItem = ({ banco, clabe, alias, id }) => {
    return (
        <>
            <tr className="">
                <th scope="row">{banco}</th>
                <td>{clabe}</td>
                <td>{alias}</td>
                <td>
                    <button className='sn-style botonera__contactsitem'>
                        <img  src={iconEdit} alt="ticket" />
                    </button>
                    <button className='sn-style botonera__contactsitem'>
                        <img  src={iconTrash} alt="ticket" />
                    </button>
                </td>
            </tr>
        </>
    )
}
