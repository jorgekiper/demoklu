import React from 'react'
import { ListContacts, AddContact } from './'

export const Contacts = () => {


  return (
  <div className="tab-pane fade" id="k-pills-contactos" role="tabpanel" aria-labelledby="k-pills-contactos-tab">
    <div className='d-flex justify-content-center'>
      <ListContacts />
      {/* <AddContact/> */}
    </div>
  </div>
  )
}
