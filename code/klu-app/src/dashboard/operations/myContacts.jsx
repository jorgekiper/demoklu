import React, { Component } from 'react';

import iconEdit from '../../assets/images/icons/operaciones/contacts/edit.svg';
import iconTrash from '../../assets/images/icons/operaciones/contacts/trash.svg';

export default class MyContacts extends Component {
  render() {
    return (
      <div id="content-my-contacts">
      <h4 className="">Mis contactos</h4>
      <table className="table table-striped text-center " id="myTable">
          <thead>
              <tr>
                  <th scope="col">Banco</th>
                  <th scope="col">Clabe</th>
                  <th scope="col">Alias</th>
                  <th scope="col">Beneficiario</th>
                  <th scope="col">Ultima modificacion</th>
                  <th scope="col">Acciones</th>
              </tr>
          </thead>
          <tbody>
              <tr className="">
                  <th scope="row">BBVA</th>
                  <td>9948... </td>
                  <td>Manu...</td>
                  <td>Manuel Pernia</td>
                  <td>17/03/1998 - 08:35 pm</td>
                  <td >
                     <a>
                      <img src={iconEdit} alt="edit" />
                     </a>
                     <a>
                      <img src={iconTrash} alt="trash"/>
                     </a>
                  </td>
              </tr>
              <tr className="">
                  <th scope="row">BBVA</th>
                  <td>9948... </td>
                  <td>Manu...</td>
                  <td>Manuel Pernia</td>
                  <td>17/03/1998 - 08:35 pm</td>
                  <td >
                     <a>
                      <img src={iconEdit} alt="edit" />
                     </a>
                     <a>
                      <img src={iconTrash} alt="trash"/>
                     </a>
                  </td>
              </tr>
              <tr className="">
                  <th scope="row">BBVA</th>
                  <td>9948... </td>
                  <td>Manu...</td>
                  <td>Manuel Pernia</td>
                  <td>17/03/1998 - 08:35 pm</td>
                  <td >
                     <a>
                      <img src={iconEdit} alt="edit" />
                     </a>
                     <a>
                      <img src={iconTrash} alt="trash"/>
                     </a>
                  </td>
              </tr>
              <tr className="">
                  <th scope="row">BBVA</th>
                  <td>9948... </td>
                  <td>Manu...</td>
                  <td>Manuel Pernia</td>
                  <td>17/03/1998 - 08:35 pm</td>
                  <td >
                     <a>
                      <img src={iconEdit} alt="edit" />
                     </a>
                     <a>
                      <img src={iconTrash} alt="trash"/>
                     </a>
                  </td>
              </tr>
              <tr className="">
                  <th scope="row">BBVA</th>
                  <td>9948... </td>
                  <td>Manu...</td>
                  <td>Manuel Pernia</td>
                  <td>17/03/1998 - 08:35 pm</td>
                  <td >
                     <a>
                      <img src={iconEdit} alt="edit" />
                     </a>
                     <a>
                      <img src={iconTrash} alt="trash"/>
                     </a>
                  </td>
              </tr>
              <tr className="">
                  <th scope="row">BBVA</th>
                  <td>9948... </td>
                  <td>Manu...</td>
                  <td>Manuel Pernia</td>
                  <td>17/03/1998 - 08:35 pm</td>
                  <td >
                     <a>
                      <img src={iconEdit} alt="edit" />
                     </a>
                     <a>
                      <img src={iconTrash} alt="trash"/>
                     </a>
                  </td>
              </tr>
          </tbody>
      </table>
      <div className="row">
          <div className="col-6">
             
          </div>
          <div className="col-6 d-grid gap-2 mx-auto">
              <button className="btn btn-secondary" type="submit">Agregar contacto</button>
          </div>
      </div>
  </div>
    )
  }
}
